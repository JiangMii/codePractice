// function solve(commands){
// let set=commands[1].slice(8).split(' ');//分割设置时间参数
// let tick=parseInt(commands[2].slice(12));//分割流逝多少秒的参数

//     class Clock{
//         constructor(){
//             this.hours='00';
//             this.minutes='00';
//             this.seconds='00';
           
//         }
//         setTime(a,b,c){
//             this.hours=a;
//             this.minutes=b;
//             this.seconds=c;
//             console.log('设置时间为:',[a,b,b].join(':'))
//         }
//         tickSeconds(s){
//             let now=parseInt(this.hours)*3600+parseInt(this.minutes)*60+parseInt(this.seconds)+s;
//             this.hours=Math.floor(now/3600)<10?'0'+Math.floor(now/3600).toString():Math.floor(now/3600).toString();
//             this.minutes=Math.floor((now%3600)/60)<10?'0'+Math.floor((now%3600)/60).toString():Math.floor((now%3600)/60).toString();
//             this.seconds=now%60<10?'0'+(now%60).toString():(now%60).toString();
//             console.log('时间流逝了'+s+'秒，变为:'+[this.hours,this.minutes,this.seconds].join(':'))
//         }
//         get(){
//             console.log('现在的时间为：',[this.hours,this.minutes,this.seconds].join(':'))
//         }
//     }

//     let myclo=new Clock();
//     myclo.setTime(...set);
//     myclo.tickSeconds(tick);
//     myclo.get();

// }
// solve(["create","setTime 00 00 00","tickSeconds 4600","getTime"])


datas=[

{

date:"2022-8-1",

value:33

},

{

date:"2022-9-1",

value:40

},

{

date:"2022-9-15",

value:50

}

]

function find(pre,last) {
    let p = new Date(pre).getTime();
    let l = new Date(last).getTime();
    let res = [];
    while (p < l) {
        p = p + 24 * 60 * 60 * 1000;
        res.push(new Date(p));
        
    }
    return res;
}
console.log(find("2022-9-15","2022-10-2"))
