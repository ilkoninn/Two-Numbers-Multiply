const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAnswer = +inputEl.value;
    if(userAnswer === correctAnswer){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
