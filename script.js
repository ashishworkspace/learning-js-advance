//setTimeout

console.log("Start");
const id = setTimeout(()=>{
    for(let i=0; i<100; i++){
        console.log(i);
    }
}, 1000);
console.log("End")
