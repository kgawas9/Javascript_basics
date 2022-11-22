const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done');
    }, 1500);
}

setTimeout(() => {
    console.log('timer is done');
    fetchData((text) => {
        console.log(text);
    })
}, 2000)

console.log('Hello');
console.log('Hi');
