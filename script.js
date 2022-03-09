var counter = document.querySelector(".counter");
var age = document.querySelector(".age");

let count = 0;
setInterval(()=> {
    if(count<19){
    count++;
    counter.innerHTML =count;
    }
},100);

setTimeout(() => {
    age.innerHTML = `I am "${count}" years old`
},2000)