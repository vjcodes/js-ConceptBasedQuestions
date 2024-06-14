const pipe = (obj) => {
    // return another function that will accept all the args
    return function(...args){
        Object.keys(obj).forEach((key) => {
            if(typeof obj[key] === 'function'){
                obj[key] = obj[key](...args)
            }else if(typeof obj[key] === 'object'){
                obj[key] = pipe(obj[key])(...args)
            }
        });

        return obj;
    }
}

let test = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c,
    e: 1,
    f: true
};

console.log(pipe(test)(1, 1, 1));