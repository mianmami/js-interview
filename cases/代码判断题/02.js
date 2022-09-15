console.log('start');
setTimeout(()=>{
    console.log('time1');
    Promise.resolve().then(()=>{
        console.log('promise1');
    })
})
setTimeout(()=>{
    console.log('time2');
    Promise.resolve().then(()=>{
        console.log('promise2');
    })
})

Promise.resolve().then(()=>{
    console.log('promise3');
})
console.log('end');