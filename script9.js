// Promise and setTimeout

// Supose we need to return a promise after two second


const myFile = () => {
    return new Promise((resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve("Download");
            }else{
                reject("Error");
            }
        }, 2000)
    })
}
myFile().then((val)=>{console.log(val)}).catch((error)=>{
    console.log(error)
})