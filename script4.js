// understand callback 

function firstFunc(params){
    console.log("First Function")
    params();
}
function secondFunc(){
    console.log("Second Function")
}


firstFunc(secondFunc);
