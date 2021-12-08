// Simple project based on setInterval

const randomColorGenerator = ()=>{
    return Math.floor(Math.random() * 256);
}
const selectBody = document.body;
const selectButton = document.querySelector("button");

const getId = setInterval(()=>{
    selectBody.style.background = `rgb(${randomColorGenerator()}, ${randomColorGenerator()}, ${randomColorGenerator()})`
}, 1000)


selectButton.addEventListener('click',()=>{
    clearInterval(getId);
    selectButton.textContent = selectBody.style.background;
})
