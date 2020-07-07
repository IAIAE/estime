
import {JSXElement, JSXIdentifier} from 'estree-jsx'
import {BaseClosure, } from '../../Closure'
import {Messages} from '../../Message'
import {Interpreter} from '../../../interpreter/main'
import {EmptyStatementReturn} from '../../Symbols'
import Scope, { createScope } from "../../Scope";
import {REACT_INTRINSIC_TAG} from '../../Node/react'

// <div>hello</div>
export function JSXElementHandler(
    this: Interpreter,
    node: JSXElement,
): BaseClosure {
    let React = this.globalContext['React']
    if(!React){
        throw this.createInternalThrowError(Messages.NormalError, 'to use jsx, you must set React in globalContext', node)
    }
    let tag = node.openingElement.name
    let tagClosure:BaseClosure
    if(tag.type == 'JSXIdentifier'){
        let tagname = tag.name
        tagClosure = REACT_INTRINSIC_TAG.includes(tag.name)?
            // 直接返回内置标签名
            ()=>tagname
            // 找到这个变量
            :this.createClosure({
                type: 'Identifier',
                name: tagname,
                loc: tag.loc,
            })
    }else if(tag.type == 'JSXMemberExpression'){
        // @ts-ignore
        tagClosure = this.createClosure(tag)
    }else if(tag.type == 'JSXNamespacedName'){
        throw this.createInternalThrowError(Messages.NormalError, 'jsx namespacename not support. ', node)
    }

    let childrenClosure: BaseClosure[]
    if(node.openingElement.selfClosing || !node.children || !node.children.length){
        childrenClosure = [()=>null]
    }else{
       childrenClosure = node.children.map(item=>{
            if(item.type == 'JSXElement'){
                return this.createClosure(item)
            }else if(item.type == 'JSXExpressionContainer'){
                return this.createClosure(item.expression)
            }else if(item.type == 'JSXText'){
                let val = item.value.trim()
                return () =>val
            }else{
                // fragment和spreadChild不支持
                return () => null
            }
        })
    }

    let attrClosure:BaseClosure[]
    if( !node.openingElement.attributes || !node.openingElement.attributes.length) {
        attrClosure = [() => null]
    }else{
        attrClosure = node.openingElement.attributes.map(item=>this.createClosure(item))
    }
    return () => {
        let tag = tagClosure()
        let attrs = attrClosure.map(_=>_()).filter(_=>_)
        let attr = attrs.length?Object.assign.apply({}, attrs):null
        let childs = childrenClosure.map(_=>_()).filter(_=>_)
        return React.createElement(tag, attr, ...childs)
    };
}