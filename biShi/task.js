class TaskCenter{
    constructor(){
        this.quene = [];
    }
    add(fn) {
        this.quene.push(fn)
    }
    wait(time) {
        this.quene.push(time)
    }
    bofore(fn){
        this.quene.unshift(fn)
    }
    start() {
        this.quene.forEach((item, index) => {
            if (typeof item === 'number') {
                setTimeout(null,item)
            } else {
                item();
            }
        })
    }
}
const task=()=>new TaskCenter();
task.add(() => { console.log('task1') })
    .bofore(() => { console.log('task2') })
    .wait(2000)
    .bofore(() => { console.log('task3') })
    .start()