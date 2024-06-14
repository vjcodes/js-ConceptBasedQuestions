let counter = 0;
let callbacksToBeExecuted = {}


function mySetTimeout(callback,delay, ...args){
    if(typeof callback !== "function"){
        throw new Error('callback should be a funtion')
    }

    let currentCounter = counter++;
    callbacksToBeExecuted[currentCounter] = {
        callback: callback,
        time: Date.now() + delay,
        args: [...args]
    }

    return currentCounter;
}

function myClearTimeout(timer){
    if(callbacksToBeExecuted[timer]){
        delete callbacksToBeExecuted[timer]
    }
}

function processCallbacks(){
    Object.keys(callbacksToBeExecuted).forEach(key => {
        if(Date.now() > callbacksToBeExecuted[key].time){
            const {callback, args} = callbacksToBeExecuted[key]
            callback(args)
        }else{
            requestIdleCallback(processCallbacks)
        }
    })
}

requestIdleCallback(processCallbacks)

mySetTimeout(console.log, 100, "data")