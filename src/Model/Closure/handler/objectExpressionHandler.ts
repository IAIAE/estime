import { Node, ESTree } from "../../Node";
import { BaseClosure, } from '../../Closure'
import { Messages } from '../../Message'
import { Interpreter } from '../../../interpreter/main'
import { defineFunctionName } from '../../../util'


// var o = {a: 1, b: 's', get name(){}, set name(){}  ...}
export function objectExpressionHandler(this: Interpreter, node: ESTree.ObjectExpression): BaseClosure {
    const items: {
        key?: string;
        property?: ESTree.Property;
        spread?: BaseClosure
    }[] = [];

    function getKey(keyNode: ESTree.Expression): string {
        if (keyNode.type === "Identifier") {
            // var o = {a:1}
            return keyNode.name;
        } else if (keyNode.type === "Literal") {
            // var o = {"a":1}
            return keyNode.value as string;
        } else {
            return this.throwError(Messages.ObjectStructureSyntaxError, keyNode.type, keyNode);
        }
    }
    // collect value, getter, and/or setter.
    const properties: {
        [prop: string]: {
            init?: BaseClosure;
            get?: BaseClosure;
            set?: BaseClosure;
        };
    } = Object.create(null);

    node.properties.forEach(property => {
        if (property.type == 'Property') {
            const kind = property.kind;
            const key = getKey(property.key);

            if (!properties[key] || kind === "init") {
                properties[key] = {};
            }

            properties[key][kind] = this.createClosure(property.value);

            items.push({
                key,
                property,
            });
        } else if (property.type == 'SpreadElement') {
            // ts声明没有这个type，也是醉了
            items.push({
                // @ts-ignore
                spread: this.createClosure(property.argument)
            })
        }
    });

    return () => {
        const result = {};
        const len = items.length;

        // 保证顺序
        for (let i = 0; i < len; i++) {
            const item = items[i];
            if (item.key != null) {
                // named property
                const key = item.key;
                const kinds = properties[key];
                const value = kinds.init ? kinds.init() : undefined;
                const getter = kinds.get ? kinds.get() : function () { };
                const setter = kinds.set ? kinds.set() : function (a: any) { };

                if ("set" in kinds || "get" in kinds) {
                    const descriptor = {
                        configurable: true,
                        enumerable: true,
                        get: getter,
                        set: setter,
                    };
                    Object.defineProperty(result, key, descriptor);
                } else {
                    const property = item.property!;
                    const kind = property.kind;
                    // set function.name
                    // var d = { test(){} }
                    // var d = { test: function(){} }
                    if (
                        property.key.type === "Identifier" &&
                        property.value.type === "FunctionExpression" &&
                        kind === "init" &&
                        !property.value.id
                    ) {
                        defineFunctionName(value, property.key.name);
                    }
                    result[key] = value;
                }
            } else {
                // spread object
                let targetObj = item.spread!()
                if(targetObj && Array.isArray(targetObj)){
                    for(let i=0;i<targetObj.length;i++){
                        result[String(i)] = targetObj[i]
                    }
                }else if(targetObj && typeof targetObj === 'object'){
                    // 解构只解构本身的属性，且不会copy不能枚举的和setter，copy的getter也会转换为一个简单的property
                    let keys = Object.getOwnPropertyNames(targetObj)
                    keys.forEach(key=>{
                        result[key] = targetObj[key]
                    })
                }else {
                    // 试了一下，在spread element非法的情况下，会忽略而不报错
                    continue
                }
            }

        }

        return result;
    };
}