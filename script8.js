// Promise

const bucket  = ["coffee", "wheat", "bread", "maggie", "salt", "oil", "butter", "vegetable"]

const friedRiceStatus = new Promise((resolve, reject)=>{
    if(bucket.includes("rice") && bucket.includes("butter") && bucket.includes("salt") && bucket.includes("vegetable")){
        resolve("Fried Rice prepared")
    }else{
        reject("Can't prepare fried rice")
    }
})


friedRiceStatus.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})