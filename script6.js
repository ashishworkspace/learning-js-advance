const headingFirst = document.querySelector(".heading1");
const headingSecond = document.querySelector(".heading2");
const headingThird = document.querySelector(".heading3");
const headingFourth = document.querySelector(".heading4");
const headingFifth = document.querySelector(".heading5");
const headingSixth = document.querySelector(".heading6");
const headingSeventh = document.querySelector(".heading7");

setTimeout(() => {
  headingFirst.innerText = "one";
  headingFirst.style.color = "pink";
  setTimeout(() => {
    headingSecond.innerText = "two";
    headingSecond.style.color = "grey";
    setTimeout(() => {
      headingThird.innerText = "three";
      headingThird.style.color = "yellow";
      setTimeout(() => {
        headingFourth.innerText = "four";
        headingFourth.style.color = "orange";
        setTimeout(() => {
            headingFifth.innerText = "five";
            headingFifth.style.color = "Green";
            setTimeout(() => {
                headingSixth.innerText = "six";
                headingSixth.style.color = "blue";
                setTimeout(() => {
                    headingSeventh.innerText = "seven";
                    headingSeventh.style.color = "red";
                  }, 2000);
              }, 2000);
          }, 2000);
      }, 2000);
    }, 2000);
  }, 1000);
}, 1000);
