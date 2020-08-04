/**
 * 宏任务，供setTimeout和setInterval调用
 */
export class MacroTask {

    private _fn: Function
    constructor(fn: Function){
        this._fn = fn
    }
    run(){
        // need try-catch?
        this._fn()
    }
}

function noop() {}

export class MicroTask{
    private _fn: Function
    constructor(fn: Function){
        this._fn = fn
    }
    run(){
        this._fn()
    }
}

export class MacroTaskList {
    static maxLen: number = 9999

    private maxLen: number
    private list: {
        task: MacroTask,
        time: number
    }[]

    /**
     * 微任务队列，唯一一个。宏任务执行时候可以添加
     */
    private microList: MicroTask[]

    /**
     * 当前正在运行的虚拟宏任务
     */
    private macroRunning: {task: MacroTask, time: number} | null
    /**
     * 这个时间片需要运行的虚拟宏任务，macroNeedRun和macroRunning这两个字段是同时设置和置空的
     */
    private macroNeedRun: {task: MacroTask, time: number}[] | null

    /**
     * 如果当前没有宏任务在运行，开发者想入队一个微任务时，就会创造一个虚假的宏任务，将其排在队列的头部，并且指定此指针。如果下次再入队一个微任务时，判断如果存在此指针，就直接入队微任务即可。
     */
    private microFakeTop: MacroTask | null

    /**
     * 下一个宏任务延迟执行的timer
     */
    private nextTimer: any

    /**
     *
     * @param maxLen 队列中允许存在的最大宏任务数量，防止过度使用导致运行时阻塞
     */
    constructor(maxLen?: number){
        this.list = []
        this.maxLen = maxLen || MacroTaskList.maxLen
        this.microList = []
        this.microFakeTop = null
        this.macroRunning = null
        this.macroNeedRun = null

    }

    /**
     * 方法入小队
     * @param fn
     */
    microQueue(fn: Function){
        if(this.macroRunning){
            this.microList.push(new MicroTask(fn))
            return;
        }else{
            let now = +new Date
            if(!this.microFakeTop){
                this.microFakeTop = new MacroTask(noop)
                if(this.list.length){
                    let time = this.list[0].time
                    this.list.unshift({
                        task: this.microFakeTop,
                        time: time<now?time-1:now,
                    })
                }else{
                    this.list.push({
                        task: this.microFakeTop,
                        time: now,
                    })
                }
                this.microList.push(new MicroTask(fn))
                this.nextRun(now)
            }else{
                this.microList.push(new MicroTask(fn))
            }
        }
    }


    /**
     * 方法入大队
     * @param fn
     * @param delay
     */
    queue(fn: Function, delay?: number){
        delay = delay || 0
        let task = new MacroTask(fn)
        let now = +new Date
        let time = now + delay
        if(!this.list.length){
            this.list.push({ time, task, })
        }else{
            // todo: 二分查找，插入进去
            let targetIndex;
            // 永远插入到正在运行的后面，即使时间可能靠前
            let startIndex = this.macroNeedRun!=null?this.macroNeedRun.length:0

            for(let i=startIndex;i<this.list.length;i++){
                if(time < this.list[i].time){
                    targetIndex = i
                    break
                }
            }
            if(targetIndex == null){
                targetIndex = this.list.length
            }
            this.list.splice(targetIndex, 0, {
                time, task
            })
        }

        if(!this.macroRunning){
            this.nextRun(now)
        }
    }

    distory(){
        if(this.nextTimer){
            clearTimeout(this.nextTimer)
        }
    }

    private findMacroToRun(now):{task: MacroTask, time: number}[]{
        let arr:any[] = []
        for(let i=0;i<this.list.length; i++){
            if(now >= this.list[i].time){
                arr.push(this.list[i])
            }
        }
        return arr;
    }

    /**
     * 执行到期的macro队列
     */
    private flush(){
        if(this.macroRunning) {return}
        if(!this.list.length) {return}
        if(this.nextTimer){
            clearTimeout(this.nextTimer)
        }
        let now = +new Date
        let marcoToRun = this.findMacroToRun(now)
        if(!marcoToRun.length){
            this.nextRun(now)
            return;
        }
        this.batchTasks(marcoToRun)
        now = +new Date
        this.nextRun(now)
    }

    /**
     * 执行到期的macro任务，每执行完一个macro任务，清空一遍micro任务队列
     */
    batchTasks(marcoToRun: {task: MacroTask, time: number}[]){
        this.microFakeTop = null
        this.macroNeedRun = marcoToRun
        let taskLen = marcoToRun.length
        while(marcoToRun.length){
            let item = marcoToRun.shift()
            this.macroRunning = item!
            item!.task.run()
            while(this.microList.length){
                let micro = this.microList.shift()
                micro!.run()
            }
        }
        // 执行完毕，清理状态指针
        this.macroNeedRun = null
        this.macroRunning = null
        // 删除已经执行的任务
        this.list.splice(0, taskLen)
        // console.info('this.list is ', this.list, marcoToRun.length )
    }

    private nextRun(now){
        if(this.nextTimer){
            clearTimeout(this.nextTimer)
        }
        if(!this.list.length){
            return;
        }
        let delay = Math.max(0, this.list[0].time - now)
        this.nextTimer = setTimeout(()=>{
            this.nextTimer = null
            this.flush()
        }, delay)
    }

}
