const headingFirst = document.querySelector(".heading1");
const headingSecond = document.querySelector(".heading2");
const headingThird = document.querySelector(".heading3");
const headingFourth = document.querySelector(".heading4");
const headingFifth = document.querySelector(".heading5");
const headingSixth = document.querySelector(".heading6");
const headingSeventh = document.querySelector(".heading7");

function changeText(selectElement, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectElement) {
        selectElement.textContent = text;
        selectElement.style.color = color;
        resolve("Change Text was Successful");
      } else {
        reject("Something went wrong");
      }
    }, time);
  });
}
changeText(headingFirst, "one", "blue", 1000)
  .then(() => {
    return changeText(headingSecond, "two", "pink", 2000);
  })
  .then(() => {
    return changeText(headingThird, "three", "red", 500);
  })
  .then(() => {
     return changeText(headingFourth, "four", "brown", 400);
  })
  .then(() => {
    return changeText(headingFifth, "five", "grey", 500);
  }).then(() => {
    return changeText(headingSixth, "six", "yellow", 1000);
  }).then(() => {
    return changeText(headingSeventh, "seven", "green", 5000);
  }).catch((error)=>{
      console.log(error);
  });
