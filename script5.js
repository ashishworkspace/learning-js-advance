// Example on Callback

const getTwoNumber = (num1, num2, onSucess, onFailure)  => {
    console.log(`1st Number: ${num1}\n2nd Number: ${num2}`);
    if ((typeof num1 === "number" )&& (typeof num2 === "number")){
        onSucess(num1, num2)
    }
    else{
        onFailure();
    }
}

const addTwoNumber = (num1, num2) => {
    console.log(`Sum: ${num1 + num2}`);
}

getTwoNumber(1, 2, addTwoNumber, ()=>{
    console.log("Wrong Datatype")
});