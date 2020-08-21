


async function test(){
    let i = 123;
    console.info(this)
    if(i){
        await 123
    }
    return i
}

let t = {
    *ttt(){
        let i = 123
        if(i){
            console.info(this)
            yield Promise.resolve(123)
        }
        return i
    }
}

function* ttt(){
    let i = 123
    if(i){
        console.info(this)
        yield Promise.resolve(123)
    }
    return i
}