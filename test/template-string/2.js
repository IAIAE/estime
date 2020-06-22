let obj = {
    name: 'obj',
    toString(){
        return `Object(${this.name})`
    }
}

let str = `${obj}`
rt(str)