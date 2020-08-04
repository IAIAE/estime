async function test(){
    let t = await ttt()
    return 123
}

function ttt(){
    return new Promise((done, notDone)=>{
        setTimeout(()=>{
            done('hello world');
        }, 2000)
    })
}

let iter = test()