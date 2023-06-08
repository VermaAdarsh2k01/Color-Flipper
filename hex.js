const hex = ["A" , "B" , "C" , "D" , "E" , "F" , "0" , "1" , "2" , "3" , "4"];
const btn = document.querySelector(".clickBtn");
const value = document.querySelector("#value");


btn.addEventListener('click' ,function(){
 let hexColor = '#';
 for ( let i=0 ; i<6 ; i++){
    hexColor += hex[getrandomNumber()];

 }
 value.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
})

function getrandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
