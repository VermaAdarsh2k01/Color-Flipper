let color = ["#476072" , "#548CA8" , "#EEEEEE" , "beige"];
const btn = document.querySelector(".clickBtn");
// console.log(btn);
const value = document.querySelector("#value");
console.log(value)

btn.addEventListener("click" ,function(){
    let randomNumber = getrandomNumber();
    document.body.style.backgroundColor = color[randomNumber];
    value.textContent = color[randomNumber];
})

function getrandomNumber(){
    return Math.floor(Math.random()*color.length);
}