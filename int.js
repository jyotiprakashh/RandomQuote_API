let quote = document.querySelector(".quote");
let qbtn = document.querySelector(".btn");
let auth = document.querySelector(".name");
let loader = document.getElementById("loader")
let sbtn =  document.querySelector(".sound");
let cbtn = document.querySelector(".copy");
qbtn.addEventListener("click",()=>{
    loader.classList.add("active");
    setTimeout(function() {
        fetch("http://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quote.innerText = result.content;
        auth.innerText = result.author;
        loader.classList.remove("active");
    })
    },1500);
})
sbtn.addEventListener("click",()=>{
    let tell = new SpeechSynthesisUtterance(`${quote.innerText} by ${auth.innerText}`);
    speechSynthesis.speak(tell);
})
cbtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote.innerText);
})