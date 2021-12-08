const headingFirst = document.querySelector(".heading1");
const headingSecond = document.querySelector(".heading2");
const headingThird = document.querySelector(".heading3");
const headingFourth = document.querySelector(".heading4");
const headingFifth = document.querySelector(".heading5");
const headingSixth = document.querySelector(".heading6");
const headingSeventh = document.querySelector(".heading7");

const setTimeFunc = (selectElement, text, color, time, callback) => {
  setTimeout(() => {
      if(selectElement){
          selectElement.innerText = text;
          selectElement.style.color = color;
          if(callback){
              callback();
          }
      }
  }, time);
};
setTimeFunc(
  headingFirst,
  "one",
  "green",
  3000,()=>{
  setTimeFunc(headingSecond, "two", "grey", 1000,()=>{
      setTimeFunc(headingSecond, "three", "yellow", 9000)
  })}
);
