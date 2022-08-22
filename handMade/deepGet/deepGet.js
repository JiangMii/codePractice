function deepGet(obj, path, defaultvalue=undefined) {
    let now = obj;
    const pathArr = path.replaceAll('[', '.').replaceAll(']', '').split('.')
    for (let i = 0; i < pathArr.length; i++){
        if (!now[pathArr[i]]) {
            return defaultvalue;
        }
        now=now[pathArr[i]]
    }
    return path.length === 0 ? defaultvalue : now;
}
let myobj = {
    a: {
        b: {
            c:[1,2,3]
        }
    }
}
console.log(deepGet(myobj,"a.b.c[1]",100))