const startButton = document.querySelector(".start");
const title = document.querySelector(".start-container");
const difficulty = document.querySelector(".difficulty");
const easy = document.querySelector(".easy-container");
const normal = document.querySelector(".normal-container");
const hard = document.querySelector(".hard-container");
const easyButton = document.querySelector(".easy");
const normalButton = document.querySelector(".normal");
const hardButton = document.querySelector(".hard");
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const ans4 = document.getElementById("btn4");
const correct = document.querySelector(".correct");
const picture = document.querySelector(".picture")
const words = document.querySelector(".words")
const wrong = document.querySelector(".wrong");
const game = document.querySelector(".game");
const final = document.querySelector(".final");
const playAgain = document.querySelector(".playAgain")
const questionNumber = document.querySelector(".questionNumber");
const questionContainer = document.querySelector(".question-container");
const questionContainer1 = document.querySelector(".question-container1");
const next = document.querySelector(".nextButton");
const confirm = document.querySelector(".confrimButton");
const winNext = document.querySelector(".winNext");
let Selectdifficulty;
let currentInstruction = 0;

let current = 0;
let score = 0;
let correctAnswer;
let pattern;
let choice;
let choicePattern;
let choosenAnswer
let totalQuestion = 0;

let easyQuestions = false;
let normalQuestions = false;
let hardQuestions = false;

let wrongAns1;
let wrongAns2;
let wrongAns3;
let wrongAns4;

let wrongImg1;
let wrongImg2;
let wrongImg3;
let wrongImg4;

let wrongPattern1
let wrongPattern2
let wrongPattern3
let wrongPattern4

//numbers:
//dong = 10
//nan = 11
//xi = 12
//bei = 13
//hong zhong = 14
//fa cai = 15

//patterns:
//tong = 0
//wan = 1
//shou = 2
const Question15 =[
    {number:"12", pattern:"0", image:"./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0", image:"./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0", image:"./img/Mahjong Tile 33.png"},
    {number:"15", pattern:"2", image:"./img/Mahjong Tile 30.png"},
    {number:"15", pattern:"2",image: "./img/Mahjong Tile 30.png"},
    {number:"15", pattern:"2",image: "./img/Mahjong Tile 30.png"},
    {number:"13", pattern:"0",image: "./img/Mahjong Tile 34.png"},
    {number:"13", pattern:"0",image: "./img/Mahjong Tile 34.png"},
    {number:"13", pattern:"0",image: "./img/Mahjong Tile 34.png"},
    {number:"14", pattern:"1",image: "./img/Mahjong Tile 28.png"},
    {number:"14", pattern:"1",image: "./img/Mahjong Tile 28.png"},
    {number:"14", pattern:"1",image: "./img/Mahjong Tile 28.png"},
    {number:"10", pattern:"0",image: "./img/Mahjong Tile 31.png"},
    {number:"10", pattern:"0",image: "./img/Mahjong Tile 31.png"}
];
const Question14 =[
    {number:"1", pattern:"0", image:"./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0", image:"./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0", image:"./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"2", image:"./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"10", pattern:"0",image: "./img/Mahjong Tile 31.png"},
    {number:"10", pattern:"0",image: "./img/Mahjong Tile 31.png"},
    {number:"10", pattern:"0",image: "./img/Mahjong Tile 31.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"15", pattern:"0",image: "./img/Mahjong Tile 30.png"},
    {number:"15", pattern:"0",image: "./img/Mahjong Tile 30.png"}
];
const Question13 =[
    {number:"9", pattern:"0", image:"./img/Mahjong Tile 9.png"},
    {number:"9", pattern:"0", image:"./img/Mahjong Tile 9.png"},
    {number:"9", pattern:"0", image:"./img/Mahjong Tile 9.png"},
    {number:"1", pattern:"1", image:"./img/Mahjong Tile 10.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"}
];
const Question12 =[
    {number:"9", pattern:"1", image:"./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1", image:"./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1", image:"./img/Mahjong Tile 18.png"},
    {number:"11", pattern:"0", image:"./img/Mahjong Tile 32.png"},
    {number:"11", pattern:"0",image: "./img/Mahjong Tile 32.png"},
    {number:"11", pattern:"0",image: "./img/Mahjong Tile 32.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"2", pattern:"1",image: "./img/Mahjong Tile 11.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"5", pattern:"1",image: "./img/Mahjong Tile 14.png"},
    {number:"5", pattern:"1",image: "./img/Mahjong Tile 14.png"}
];
const Question11 =[
    {number:"9", pattern:"2", image:"./img/Mahjong Tile 27.png"},
    {number:"9", pattern:"2", image:"./img/Mahjong Tile 27.png"},
    {number:"9", pattern:"2", image:"./img/Mahjong Tile 27.png"},
    {number:"3", pattern:"2", image:"./img/Mahjong Tile 21.png"},
    {number:"4", pattern:"2",image: "./img/Mahjong Tile 22.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"15", pattern:"0",image: "./img/Mahjong Tile 30.png"},
    {number:"15", pattern:"0",image: "./img/Mahjong Tile 30.png"},
    {number:"15", pattern:"0",image: "./img/Mahjong Tile 30.png"},
    {number:"8", pattern:"2",image: "./img/Mahjong Tile 26.png"},
    {number:"8", pattern:"2",image: "./img/Mahjong Tile 26.png"}
];
const Question10 =[
    {number:"1", pattern:"1", image:"./img/Mahjong Tile 10.png"},
    {number:"2", pattern:"1", image:"./img/Mahjong Tile 11.png"},
    {number:"3", pattern:"1", image:"./img/Mahjong Tile 12.png"},
    {number:"7", pattern:"2", image:"./img/Mahjong Tile 25.png"},
    {number:"8", pattern:"2",image: "./img/Mahjong Tile 26.png"},
    {number:"9", pattern:"2",image: "./img/Mahjong Tile 27.png"},
    {number:"4", pattern:"2",image: "./img/Mahjong Tile 22.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"6", pattern:"0",image: "./img/Mahjong Tile 6.png"},
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"8", pattern:"0",image: "./img/Mahjong Tile 8.png"},
    {number:"4", pattern:"0",image: "./img/Mahjong Tile 4.png"},
    {number:"4", pattern:"0",image: "./img/Mahjong Tile 4.png"}
];
const Question9 =[
    {number:"2", pattern:"0", image:"./img/Mahjong Tile 2.png"},
    {number:"2", pattern:"0", image:"./img/Mahjong Tile 2.png"},
    {number:"2", pattern:"0", image:"./img/Mahjong Tile 2.png"},
    {number:"0", pattern:"0", image:"./img/Mahjong Tile 29.png"},
    {number:"0", pattern:"0",image: "./img/Mahjong Tile 29.png"},
    {number:"0", pattern:"0",image: "./img/Mahjong Tile 29.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"14", pattern:"0",image: "./img/Mahjong Tile 28.png"},
    {number:"14", pattern:"0",image: "./img/Mahjong Tile 28.png"},
    {number:"14", pattern:"0",image: "./img/Mahjong Tile 28.png"},
    {number:"11", pattern:"0",image: "./img/Mahjong Tile 32.png"},
    {number:"11", pattern:"0",image: "./img/Mahjong Tile 32.png"}
];
const Question8 =[
    {number:"10", pattern:"0", image:"./img/Mahjong Tile 31.png"},
    {number:"10", pattern:"0", image:"./img/Mahjong Tile 31.png"},
    {number:"10", pattern:"0", image:"./img/Mahjong Tile 31.png"},
    {number:"5", pattern:"1", image:"./img/Mahjong Tile 14.png"},
    {number:"6", pattern:"1",image: "./img/Mahjong Tile 15.png"},
    {number:"7", pattern:"1",image: "./img/Mahjong Tile 16.png"},
    {number:"4", pattern:"0",image: "./img/Mahjong Tile 4.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"6", pattern:"0",image: "./img/Mahjong Tile 6.png"},
    {number:"7", pattern:"2",image: "./img/Mahjong Tile 25.png"},
    {number:"8", pattern:"2",image: "./img/Mahjong Tile 26.png"},
    {number:"8", pattern:"2",image: "./img/Mahjong Tile 27.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"}
];
const Question7 =[
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"2", pattern:"1", image:"./img/Mahjong Tile 11.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"5", pattern:"1",image: "./img/Mahjong Tile 14.png"},
    {number:"6", pattern:"1",image: "./img/Mahjong Tile 15.png"},
    {number:"7", pattern:"1",image: "./img/Mahjong Tile 16.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"4", pattern:"1",image: "./img/Mahjong Tile 13.png"},
    {number:"5", pattern:"1",image: "./img/Mahjong Tile 14.png"},
    {number:"6", pattern:"1",image: "./img/Mahjong Tile 15.png"},
    {number:"6", pattern:"1",image: "./img/Mahjong Tile 15.png"}  
];
const Question6 =[
    {number:"10", pattern:"0",image: "./img/Mahjong Tile 31.png"},
    {number:"11", pattern:"0",image: "./img/Mahjong Tile 32.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"13", pattern:"0", image:"./img/Mahjong Tile 34.png"},
    {number:"14", pattern:"0",image: "./img/Mahjong Tile 28.png"},
    {number:"0", pattern:"0",image: "./img/Mahjong Tile 29.png"},
    {number:"15", pattern:"0",image: "./img/Mahjong Tile 30.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"9", pattern:"0",image: "./img/Mahjong Tile 9.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"9", pattern:"2",image: "./img/Mahjong Tile 27.png"}
];
const Question5 =[
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"8", pattern:"0",image: "./img/Mahjong Tile 8.png"},
    {number:"9", pattern:"0",image: "./img/Mahjong Tile 9.png"},
    {number:"3", pattern:"0", image:"./img/Mahjong Tile 3.png"},
    {number:"4", pattern:"0",image: "./img/Mahjong Tile 4.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"2", pattern:"0",image: "./img/Mahjong Tile 2.png"},
    {number:"3", pattern:"0",image: "./img/Mahjong Tile 3.png"},
    {number:"6", pattern:"0",image: "./img/Mahjong Tile 6.png"},
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"8", pattern:"0",image: "./img/Mahjong Tile 8.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"}
];
const Question4 =[
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"2", pattern:"0",image: "./img/Mahjong Tile 2.png"},
    {number:"3", pattern:"0",image: "./img/Mahjong Tile 3.png"},
    {number:"6", pattern:"1", image:"./img/Mahjong Tile 15.png"},
    {number:"7", pattern:"1",image: "./img/Mahjong Tile 16.png"},
    {number:"8", pattern:"1",image: "./img/Mahjong Tile 17.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 20.png"},
    {number:"3", pattern:"2",image: "./img/Mahjong Tile 21.png"},
    {number:"2", pattern:"1",image: "./img/Mahjong Tile 11.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"4", pattern:"1",image: "./img/Mahjong Tile 13.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"}
];
const Question3 =[
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 20.png"},
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 20.png"},
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 20.png"},
    {number:"8", pattern:"1", image:"./img/Mahjong Tile 17.png"},
    {number:"8", pattern:"1",image: "./img/Mahjong Tile 17.png"},
    {number:"8", pattern:"1",image: "./img/Mahjong Tile 17.png"},
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"}
];
const Question2 =[
    {number:"7", pattern:"2",image: "./img/Mahjong Tile 25.png"},
    {number:"7", pattern:"2",image: "./img/Mahjong Tile 25.png"},
    {number:"7", pattern:"2",image: "./img/Mahjong Tile 25.png"},
    {number:"7", pattern:"0", image:"./img/Mahjong Tile 7.png"},
    {number:"8", pattern:"0",image: "./img/Mahjong Tile 8.png"},
    {number:"9", pattern:"0",image: "./img/Mahjong Tile 9.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0",image: "./img/Mahjong Tile 33.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"4", pattern:"1",image: "./img/Mahjong Tile 13.png"},
    {number:"5", pattern:"1",image: "./img/Mahjong Tile 14.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"}
];
const Question1 =[
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 20.png"},
    {number:"3", pattern:"2", image:"./img/Mahjong Tile 21.png"},
    {number:"4", pattern:"2",image: "./img/Mahjong Tile 22.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"7", pattern:"2",image: "./img/Mahjong Tile 25.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"9", pattern:"2",image: "./img/Mahjong Tile 27.png"},
    {number:"9", pattern:"2",image: "./img/Mahjong Tile 27.png"}    
];


startButton.addEventListener("click", () => {
    title.classList.add("hide")
    Selectdifficulty = true;
    currentInstruction = 0
    difficulty.classList.remove("hide")
})

easyButton.addEventListener("click", () => {
    difficulty.classList.add("hide")
    game.classList.remove("hide")
    easyQuestions = true;
    current = 0;
    totalQuestion = 5;
    choosenAnswer = false
    Question()
})
normalButton.addEventListener("click", () => {
    difficulty.classList.add("hide")
    game.classList.remove("hide")
    normalQuestions = true;
    current = 0;
    totalQuestion = 10;
    choosenAnswer = false
    Question()
})
hardButton.addEventListener("click", () => {
    difficulty.classList.add("hide")
    game.classList.remove("hide")
    hardQuestions = true;
    current = 0;
    totalQuestion = 20;
    choosenAnswer = false
    Question()
})

ans1.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans2.style.backgroundColor = "Transparent"
        ans3.style.backgroundColor = "Transparent"
        ans4.style.backgroundColor = "Transparent"
        ans1.style.backgroundColor = "#25712E"
        choice = wrongAns1
        choicePattern = wrongPattern1
    }
})
ans2.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans1.style.backgroundColor = "Transparent"
        ans3.style.backgroundColor = "Transparent"
        ans4.style.backgroundColor = "Transparent"
        ans2.style.backgroundColor = "#25712E"
        choice = wrongAns2
        choicePattern = wrongPattern2
        }
})
ans3.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans1.style.backgroundColor = "Transparent"
        ans2.style.backgroundColor = "Transparent"
        ans4.style.backgroundColor = "Transparent"
        ans3.style.backgroundColor = "#25712E"
        choice = wrongAns3
        choicePattern = wrongPattern3
        }
})
ans4.addEventListener("click", () => {
    if(choosenAnswer == false){
        ans1.style.backgroundColor = "Transparent"
        ans2.style.backgroundColor = "Transparent"
        ans3.style.backgroundColor = "Transparent"
        ans4.style.backgroundColor = "#25712E"
        choice = wrongAns4
        choicePattern = wrongPattern4
        }
})
confirm.addEventListener("click", () => {
    if(choice == null  && choicePattern == null){
        return
    }
    ans1.style.backgroundColor = "Transparent"
    ans2.style.backgroundColor = "Transparent"
    ans3.style.backgroundColor = "Transparent"
    ans4.style.backgroundColor = "Transparent"
    if(choice == correctAnswer  && choicePattern == pattern){
        score += 1;
        correct.classList.remove("hide")
    }
        else{
            console.log("wrong")
            if(choice == wrongAns1 && choicePattern == wrongPattern1){
                ans1.innerHTML=`
                <img src="${wrongImg1}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(choice == wrongAns2 && choicePattern == wrongPattern2){
                ans2.innerHTML=`
                <img src="${wrongImg2}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(choice == wrongAns3 && choicePattern == wrongPattern3){
                ans3.innerHTML=`
                <img src="${wrongImg3}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(choice == wrongAns4 && choicePattern == wrongPattern4){
                ans4.innerHTML=`
                <img src="${wrongImg4}"></div>
                <img class="overlay" src="./img/wrong.png">`
            }
            if(correctAnswer == wrongAns1 && pattern == wrongPattern1){
            ans1.innerHTML =`
                <img src="${wrongImg1}"></div>
                <img class="overlay" src="./img/correct.png">`
            }
            if(correctAnswer == wrongAns2 && pattern == wrongPattern2){
                ans2.innerHTML =`
                <img src="${wrongImg2}"></div>
                <img class="overlay" src="./img/correct.png">`
            }
            if(correctAnswer == wrongAns3 && pattern == wrongPattern3){
                ans3.innerHTML =`
                <img src="${wrongImg3}"></div>
                <img class="overlay" src="./img/correct.png">`
            }
            if(correctAnswer == wrongAns4 && pattern == wrongPattern4){
                ans4.innerHTML =`
                <img src="${wrongImg4}"></div>
                <img class="overlay" src="./img/correct.png">`
            }
        }
        choosenAnswer = true
        confirm.classList.add("hide")
        next.classList.remove("hide")
    })
next.addEventListener("click", () => {
    choosenAnswer = false;
    ans1.style.backgroundImage = ""
    ans2.style.backgroundImage = ""
    ans3.style.backgroundImage = ""
    ans4.style.backgroundImage = ""
    correct.classList.add("hide")
    choice = null;
    choicePattern = null
    Question()
    confirm.classList.remove("hide")
    next.classList.add("hide")
})
winNext.addEventListener("click", () => {
    choosenAnswer = false;
    ans1.style.backgroundImage = "none"
    ans2.style.backgroundImage = "none"
    ans3.style.backgroundImage = "none"
    ans4.style.backgroundImage = "none"
    correct.classList.add("hide")
    choice = null;
    choicePattern = null
    Question()
    confirm.classList.remove("hide")
    next.classList.add("hide")
})

playAgain.addEventListener("click", () => {
    difficulty.classList.remove("hide")
    final.classList.add("hide")
    easyQuestions = false;
    normalQuestions = false;
    hardQuestions = false;
})

function Question(){
    let pass = totalQuestion /2;
    if(current == totalQuestion){
        console.log(score)
        final.classList.remove("hide")
        game.classList.add("hide")
        if(score == totalQuestion){
            picture.innerHTML = `<img class = "imgMid" src = "./img/mahjongMaster.png">`
            words.innerHTML = ``
        }
        else if(score >= pass){
            picture.innerHTML = `<img class = "imgMid" src = "./img/mahjongExpert.png">`
            words.innerHTML = ``
        }
        else if(score < pass){
            picture.innerHTML = `<img class = "imgMid" src = "./img/mahjongNewbie.png">`
            words.innerHTML = `<img class = "bigText" src = "./img/GiveYourBest.png">`
        }
        return
    }
    current += 1;
    let correctImg
    let newQuestion
    let randomQuestionIndex = Math.floor(Math.random() * 15);

    if(randomQuestionIndex == 0){
        newQuestion = Question1
    }
    if(randomQuestionIndex == 1){
        newQuestion = Question2
    }
    if(randomQuestionIndex == 2){
        newQuestion = Question3
    }
    if(randomQuestionIndex == 3){
        newQuestion = Question4
    }
    if(randomQuestionIndex == 4){
        newQuestion = Question5
    }
    if(randomQuestionIndex == 5){
        newQuestion = Question6
    }
    if(randomQuestionIndex == 6){
        newQuestion = Question7
    }
    if(randomQuestionIndex == 7){
        newQuestion = Question8
    }
    if(randomQuestionIndex == 8){
        newQuestion = Question9
    }
    if(randomQuestionIndex == 9){
        newQuestion = Question10
    }
    if(randomQuestionIndex == 10){
        newQuestion = Question11
    }
    if(randomQuestionIndex == 11){
        newQuestion = Question12
    }
    if(randomQuestionIndex == 12){
        newQuestion = Question13
    }
    if(randomQuestionIndex == 13){
        newQuestion = Question14
    }
    if(randomQuestionIndex == 14){
        newQuestion = Question15
    }

    questionNumber.innerHTML = current + " / " + totalQuestion;
    if(easyQuestions == true){
        let missingTile = Math.floor(Math.random() * 14);
        correctImg = newQuestion[missingTile].image;
        correctAnswer = newQuestion[missingTile].number;
        pattern = newQuestion[missingTile].pattern;
        newQuestion[missingTile].image = "./img/Mahjong Tile Question Mark.png"
        questionContainer.innerHTML = `
                <img src="${newQuestion[0].image}">
                <img src="${newQuestion[1].image}">
                <img src="${newQuestion[2].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[3].image}">
                <img src="${newQuestion[4].image}">
                <img src="${newQuestion[5].image}">
                <img src="${newQuestion[6].image}">
                <img src="${newQuestion[7].image}">
                <img src="${newQuestion[8].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[9].image}">
                <img src="${newQuestion[10].image}">
                <img src="${newQuestion[11].image}">`
                questionContainer1.innerHTML = `<img src="${newQuestion[12].image}">
                <img src="${newQuestion[13].image}">`
                newQuestion[missingTile].image = correctImg;
    }
    if(normalQuestions == true || hardQuestions == true){
        let missingTile = Math.floor(Math.random() * 14);
        correctImg = newQuestion[missingTile].image;
        correctAnswer = newQuestion[missingTile].number;
        pattern = newQuestion[missingTile].pattern;
        
        if(normalQuestions == true){
            newQuestion[missingTile].image = "./img/Mahjong Tile Question Mark.png"
        }
        if(hardQuestions == true){
            let missingRandomTile = Math.floor(Math.random() * 16);
            let missingRandomPattern = Math.floor(Math.random() * 3);
            
            //bai ban
            if(missingRandomTile == 0){
                newQuestion[missingTile].image = "./img/Mahjong Tile 29.png";
            }
            //dong
            if(missingRandomTile == 10){
                newQuestion[missingTile].image = "./img/Mahjong Tile 31.png";
            }
            //nan
            if(missingRandomTile == 11){
                newQuestion[missingTile].image = "./img/Mahjong Tile 32.png";
            }
            //xi
            if(missingRandomTile == 12){
                newQuestion[missingTile].image = "./img/Mahjong Tile 32.png";
            }
            //bei
           if(missingRandomTile == 13){
                newQuestion[missingTile].image = "./img/Mahjong Tile 34.png";
           }
            //hong zhong
            if(missingRandomTile == 14){
                newQuestion[missingTile].image = "./img/Mahjong Tile 28.png";
            }
            //fa cai
            if(missingRandomTile == 15){
                newQuestion[missingTile].image = "./img/Mahjong Tile 30.png";
            }
            if(missingRandomPattern == 0){
                //tong
                if(missingRandomTile == 1){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 1.png";
               }
                if(missingRandomTile == 2){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 2.png";
               }
               if(missingRandomTile == 3){
                 newQuestion[missingTile].image = "./img/Mahjong Tile 3.png";
                }
                if(missingRandomTile == 4){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 4.png";
                }
                if(missingRandomTile == 5){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 5.png";
                }
                if(missingRandomTile == 6){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 6.png";
                }
                if(missingRandomTile == 7){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 7.png";
                }
                if(missingRandomTile == 8){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 8.png";
                }
                if(missingRandomTile == 9){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 9.png";
                }
            }
            if(missingRandomPattern == 1)
            {
                //wan
                if(missingRandomTile == 1){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 10.png";
                }
                if(missingRandomTile == 2){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 11.png";
                }
                if(missingRandomTile == 3){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 12.png";
                }
                if(missingRandomTile == 4){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 13.png";
                }
                if(missingRandomTile == 5){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 14.png";
                }
                if(missingRandomTile == 6){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 15.png";
                }
                if(missingRandomTile == 7){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 16.png";
                }
                if(missingRandomTile == 8){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 17.png";
                }
                if(missingRandomTile == 9){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 18.png";
                }
            }
            if(missingRandomPattern == 2)
            {
                //shou
                if(missingRandomTile == 1){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 19.png";
                }
                if(missingRandomTile == 2){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 20.png";
                }
                if(missingRandomTile == 3){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 21.png";
                }
                if(missingRandomTile == 4){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 22.png";
                }
                if(missingRandomTile == 5){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 23.png";
                }
                if(missingRandomTile == 6){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 24.png";
                }
                if(missingRandomTile == 7){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 25.png";
                }
                if(missingRandomTile == 8){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 26.png";
                }
                if(missingRandomTile == 9){
                    newQuestion[missingTile].image = "./img/Mahjong Tile 27.png";
                }
            }
        }

        let arrangeRandom = Math.floor(Math.random() * 3);
        if(arrangeRandom == 0){
            questionContainer.innerHTML = `
                <img src="${newQuestion[2].image}">
                <img src="${newQuestion[5].image}">
                <img src="${newQuestion[12].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[9].image}">
                <img src="${newQuestion[1].image}">
                <img src="${newQuestion[6].image}">
                <img src="${newQuestion[7].image}">
                <img src="${newQuestion[3].image}">
                <img src="${newQuestion[10].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[0].image}">
                <img src="${newQuestion[13].image}">
                <img src="${newQuestion[4].image}">`
            questionContainer1.innerHTML = `
                <img src="${newQuestion[8].image}">
                <img src="${newQuestion[11].image}">`
        }
        if(arrangeRandom == 1){
            questionContainer.innerHTML = `
                <img src="${newQuestion[4].image}">
                <img src="${newQuestion[13].image}">
                <img src="${newQuestion[8].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[11].image}">
                <img src="${newQuestion[6].image}">
                <img src="${newQuestion[2].image}">
                <img src="${newQuestion[12].image}">
                <img src="${newQuestion[5].image}">
                <img src="${newQuestion[3].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[10].image}">
                <img src="${newQuestion[1].image}">
                <img src="${newQuestion[9].image}">`
            questionContainer1.innerHTML = `
                <img src="${newQuestion[0].image}">
                <img src="${newQuestion[7].image}">`
        }
        if(arrangeRandom == 2){
            questionContainer.innerHTML = `
                <img src="${newQuestion[9].image}">
                <img src="${newQuestion[7].image}">
                <img src="${newQuestion[13].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[10].image}">
                <img src="${newQuestion[3].image}">
                <img src="${newQuestion[1].image}">
                <img src="${newQuestion[6].image}">
                <img src="${newQuestion[8].image}">
                <img src="${newQuestion[12].image}">
                <img src="./img/Empty.png">
                <img src="${newQuestion[2].image}">
                <img src="${newQuestion[4].image}">
                <img src="${newQuestion[11].image}">`
            questionContainer1.innerHTML = `
            <img src="${newQuestion[5].image}">
            <img src="${newQuestion[0].image}">`
        }
        newQuestion[missingTile].image = correctImg
    }
    wrongAns1 = Math.floor(Math.random() * 9);
    wrongPattern1 = Math.floor(Math.random() * 3);
    wrongAns2 = Math.floor(Math.random() * 9);
    wrongPattern2 = Math.floor(Math.random() * 3);
    wrongAns3 = Math.floor(Math.random() * 9);
    wrongPattern3 = Math.floor(Math.random() * 3);
    wrongAns4 = Math.floor(Math.random() * 9);
    wrongPattern4 = Math.floor(Math.random() * 3);

    if(wrongAns1 == wrongAns2 && wrongPattern1 == wrongPattern2){
        wrongAns1 = Math.floor(Math.random() * 16);
        wrongAns2 = Math.floor(Math.random() * 16);
    }
    if(wrongAns1 == wrongAns3 && wrongPattern1 == wrongPattern3){
        wrongAns1 = Math.floor(Math.random() * 16);
        wrongAns3 = Math.floor(Math.random() * 16);
    }
    if(wrongAns1 == wrongAns4 && wrongPattern1 == wrongPattern4){
        wrongAns1 = Math.floor(Math.random() * 16);
        wrongAns4 = Math.floor(Math.random() * 16);
    }
    if(wrongAns2 == wrongAns3 && wrongPattern2 == wrongPattern3){
        wrongAns2 = Math.floor(Math.random() * 16);
        wrongAns3 = Math.floor(Math.random() * 16);
    }
    if(wrongAns2 == wrongAns4 && wrongPattern2 == wrongPattern4){
        wrongAns2 = Math.floor(Math.random() * 16);
        wrongAns4 = Math.floor(Math.random() * 16);
    }
    if(wrongAns3 == wrongAns4 && wrongPattern3 == wrongPattern4){
        wrongAns3 = Math.floor(Math.random() * 16);
        wrongAns4 = Math.floor(Math.random() * 16);
    }
    
    if(wrongAns1 == correctAnswer && wrongPattern1 == pattern){
        wrongAns1 = Math.floor(Math.random() * 16);
    }
    if(wrongAns2 == correctAnswer && wrongPattern2 == pattern){
        wrongAns2 = Math.floor(Math.random() * 16);
    }
    if(wrongAns3 == correctAnswer && wrongPattern3 == pattern){
        wrongAns3 = Math.floor(Math.random() * 16);
    }
    if(wrongAns4 == correctAnswer && wrongPattern4 == pattern){
        wrongAns4 = Math.floor(Math.random() * 16);
    }

    if(wrongAns1 == 0 || wrongAns2 == 0 || wrongAns3 == 0 || wrongAns4 == 0){
        if(wrongAns1 == wrongAns2){
            wrongAns1 = Math.floor(Math.random() * 16);
            wrongAns2 = Math.floor(Math.random() * 16);
        }
        if(wrongAns1 == wrongAns3){
            wrongAns1 = Math.floor(Math.random() * 16);
            wrongAns3 = Math.floor(Math.random() * 16);
        }
        if(wrongAns1 == wrongAns4){
            wrongAns1 = Math.floor(Math.random() * 16);
            wrongAns4 = Math.floor(Math.random() * 16);
        }
        if(wrongAns2 == wrongAns3){
            wrongAns2 = Math.floor(Math.random() * 16);
            wrongAns3 = Math.floor(Math.random() * 16);
        }
        if(wrongAns2 == wrongAns4){
            wrongAns2 = Math.floor(Math.random() * 16);
            wrongAns4 = Math.floor(Math.random() * 16);
        }
        if(wrongAns3 == wrongAns4){
            wrongAns1 = Math.floor(Math.random() * 16);
            wrongAns2 = Math.floor(Math.random() * 16);
        }
        if(wrongAns1 == correctAnswer){
            wrongAns1 = Math.floor(Math.random() * 16);
        }
        if(wrongAns2 == correctAnswer){
            wrongAns2 = Math.floor(Math.random() * 16);
        }
        if(wrongAns3 == correctAnswer){
            wrongAns3 = Math.floor(Math.random() * 16);
        }
        if(wrongAns4 == correctAnswer){
            wrongAns4 = Math.floor(Math.random() * 16);
        }
    }
    
    //bai ban
    if(wrongAns1 == 0){
        wrongImg1 = "./img/Mahjong Tile 29.png";
    }
    if(wrongAns2 == 0){
        wrongImg2 = "./img/Mahjong Tile 29.png";
    }
    if(wrongAns3 == 0){
        wrongImg3 = "./img/Mahjong Tile 29.png";
    }
    if(wrongAns4 == 0){
        wrongImg4 = "./img/Mahjong Tile 29.png";
    }

    //dong
    if(wrongAns1 == 10){
        wrongImg1 = "./img/Mahjong Tile 31.png";
    }
    if(wrongAns2 == 10){
        wrongImg2 = "./img/Mahjong Tile 31.png";
    }
    if(wrongAns3 == 10){
        wrongImg3 = "./img/Mahjong Tile 31.png";
    }
    if(wrongAns4 == 10){
        wrongImg4 = "./img/Mahjong Tile 31.png";
    }
    //nan
    if(wrongAns1 == 11){
        wrongImg1 = "./img/Mahjong Tile 32.png";
    }
    if(wrongAns2 == 11){
        wrongImg2 = "./img/Mahjong Tile 32.png";
    }
    if(wrongAns3 == 11){
        wrongImg3 = "./img/Mahjong Tile 32.png";
    }
    if(wrongAns4 == 11){
        wrongImg4 = "./img/Mahjong Tile 32.png";
    }
    //xi
    if(wrongAns1 == 12){
        wrongImg1 = "./img/Mahjong Tile 32.png";
    }
    if(wrongAns2 == 12){
        wrongImg2 = "./img/Mahjong Tile 32.png";
    }
    if(wrongAns3 == 12){
        wrongImg3 = "./img/Mahjong Tile 32.png";
    }
    if(wrongAns4 == 12){
        wrongImg4 = "./img/Mahjong Tile 32.png";
    }
    //bei
    if(wrongAns1 == 13){
        wrongImg1 = "./img/Mahjong Tile 34.png";
    }
    if(wrongAns2 == 13){
        wrongImg2 = "./img/Mahjong Tile 34.png";
    }
    if(wrongAns3 == 13){
        wrongImg3 = "./img/Mahjong Tile 34.png";
    }
    if(wrongAns4 == 13){
        wrongImg4 = "./img/Mahjong Tile 34.png";
    }
    //hong zhong
    if(wrongAns1 == 14){
        wrongImg1 = "./img/Mahjong Tile 28.png";
    }
    if(wrongAns2 == 14){
        wrongImg2 = "./img/Mahjong Tile 28.png";
    }
    if(wrongAns3 == 14){
        wrongImg3 = "./img/Mahjong Tile 28.png";
    }
    if(wrongAns4 == 14){
        wrongImg4 = "./img/Mahjong Tile 28.png";
    }
    //fa cai
    if(wrongAns1 == 15){
        wrongImg1 = "./img/Mahjong Tile 30.png";
    }
    if(wrongAns2 == 15){
        wrongImg2 = "./img/Mahjong Tile 30.png";
    }
    if(wrongAns3 == 15){
        wrongImg3 = "./img/Mahjong Tile 30.png";
    }
    if(wrongAns4 == 15){
        wrongImg4 = "./img/Mahjong Tile 30.png";
    }
    
    if(wrongPattern4 == 0){
        //tong
        if(wrongAns4 == 1){
            wrongImg4 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns4 == 2){
            wrongImg4 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns4 == 3){
            wrongImg4 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns4 == 4){
            wrongImg4 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns4 == 5){
            wrongImg4 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns4 == 6){
            wrongImg4 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns4 == 7){
            wrongImg4 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns4 == 8){
            wrongImg4 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns4 == 9){
            wrongImg4 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern3 == 0){
        //tong
        if(wrongAns3 == 1){
            wrongImg3 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns3 == 2){
            wrongImg3 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns3 == 3){
            wrongImg3 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns3 == 4){
            wrongImg3 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns3 == 5){
            wrongImg3 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns3 == 6){
            wrongImg3 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns3 == 7){
            wrongImg3 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns3 == 8){
            wrongImg3 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns3 == 9){
            wrongImg3 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern1 == 0){
        //tong
        if(wrongAns1 == 1){
            wrongImg1 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns1 == 2){
            wrongImg1 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns1 == 3){
            wrongImg1 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns1 == 4){
            wrongImg1 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns1 == 5){
            wrongImg1 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns1 == 6){
            wrongImg1 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns1 == 7){
            wrongImg1 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns1 == 8){
            wrongImg1 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns1 == 9){
            wrongImg1 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern2 == 0){
        //tong
        if(wrongAns2 == 1){
            wrongImg2 = "./img/Mahjong Tile 1.png";
        }
        if(wrongAns2 == 2){
            wrongImg2 = "./img/Mahjong Tile 2.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 3.png";
        }
        if(wrongAns2 == 4){
            wrongImg2 = "./img/Mahjong Tile 4.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 5.png";
        }
        if(wrongAns2 == 6){
            wrongImg2 = "./img/Mahjong Tile 6.png";
        }
        if(wrongAns2 == 7){
            wrongImg2 = "./img/Mahjong Tile 7.png";
        }
        if(wrongAns2 == 8){
            wrongImg2 = "./img/Mahjong Tile 8.png";
        }
        if(wrongAns2 == 9){
            wrongImg2 = "./img/Mahjong Tile 9.png";
        }
    }
    if(wrongPattern2 == 1)
    {
        //wan
        if(wrongAns2 == 1){
            wrongImg2 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns2 == 2){
            wrongImg2 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns2 == 4){
            wrongImg2 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns2 == 6){
            wrongImg2 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns2 == 7){
            wrongImg2 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns2 == 8){
            wrongImg2 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns2 == 9){
            wrongImg2 = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern3 == 1)
    {
        //wan
        if(wrongAns3 == 1){
            wrongImg3 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns3 == 2){
            wrongImg3 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns3 == 3){
            wrongImg3 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns3 == 4){
            wrongImg3 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns3 == 5){
            wrongImg3 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns3 == 6){
            wrongImg3 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns3 == 7){
            wrongImg3 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns3 == 8){
            wrongImg3 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns3 == 9){
            wrongImg3 = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern4 == 1)
    {
        //wan
        if(wrongAns4 == 1){
            wrongImg4 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns4 == 2){
            wrongImg4 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns4 == 3){
            wrongImg4 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns4 == 4){
            wrongImg4 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns4 == 5){
            wrongImg4 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns4 == 6){
            wrongImg4 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns4 == 7){
            wrongImg4 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns4 == 8){
            wrongImg4 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns4 == 9){
            wrongImg4 = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern1 == 1)
    {
        //wan
        if(wrongAns1 == 1){
            wrongImg1 = "./img/Mahjong Tile 10.png";
        }
        if(wrongAns1 == 2){
            wrongImg1 = "./img/Mahjong Tile 11.png";
        }
        if(wrongAns1 == 3){
            wrongImg1 = "./img/Mahjong Tile 12.png";
        }
        if(wrongAns1 == 4){
            wrongImg1 = "./img/Mahjong Tile 13.png";
        }
        if(wrongAns1 == 5){
            wrongImg1 = "./img/Mahjong Tile 14.png";
        }
        if(wrongAns1 == 6){
            wrongImg1 = "./img/Mahjong Tile 15.png";
        }
        if(wrongAns1 == 7){
            wrongImg1 = "./img/Mahjong Tile 16.png";
        }
        if(wrongAns1 == 8){
            wrongImg1 = "./img/Mahjong Tile 17.png";
        }
        if(wrongAns1 == 9){
            wrongImg1 = "./img/Mahjong Tile 18.png";
        }
    }
    if(wrongPattern1 == 2){
        //shou
        if(wrongAns1 == 1){
            wrongImg1 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns1 == 2){
            wrongImg1 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns1 == 3){
            wrongImg1 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns1 == 4){
            wrongImg1 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns1 == 5){
            wrongImg1 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns1 == 6){
            wrongImg1 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns1 == 7){
            wrongImg1 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns1 == 8){
            wrongImg1 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns1 == 9){
            wrongImg1 = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern2 == 2){
        //shou
        if(wrongAns2 == 1){
            wrongImg2 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns2 == 2){
            wrongImg2 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns2 == 3){
            wrongImg2 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns2 == 4){
            wrongImg2 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns2 == 5){
            wrongImg2 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns2 == 6){
            wrongImg2 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns2 == 7){
            wrongImg2 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns2 == 8){
            wrongImg2 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns2 == 9){
            wrongImg2 = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern3 == 2){
        //shou
        if(wrongAns3 == 1){
            wrongImg3 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns3 == 2){
            wrongImg3 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns3 == 3){
            wrongImg3 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns3 == 4){
            wrongImg3 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns3 == 5){
            wrongImg3 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns3 == 6){
            wrongImg3 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns3 == 7){
            wrongImg3 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns3 == 8){
            wrongImg3 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns3 == 9){
            wrongImg3 = "./img/Mahjong Tile 27.png";
        }
    }
    if(wrongPattern4 == 2){
        //shou
        if(wrongAns4 == 1){
            wrongImg4 = "./img/Mahjong Tile 19.png";
        }
        if(wrongAns4 == 2){
            wrongImg4 = "./img/Mahjong Tile 20.png";
        }
        if(wrongAns4 == 3){
            wrongImg4 = "./img/Mahjong Tile 21.png";
        }
        if(wrongAns4 == 4){
            wrongImg4 = "./img/Mahjong Tile 22.png";
        }
        if(wrongAns4 == 5){
            wrongImg4 = "./img/Mahjong Tile 23.png";
        }
        if(wrongAns4 == 6){
            wrongImg4 = "./img/Mahjong Tile 24.png";
        }
        if(wrongAns4 == 7){
            wrongImg4 = "./img/Mahjong Tile 25.png";
        }
        if(wrongAns4 == 8){
            wrongImg4 = "./img/Mahjong Tile 26.png";
        }
        if(wrongAns4 == 9){
            wrongImg4 = "./img/Mahjong Tile 27.png";
        }
    }
    console.log(wrongPattern1, wrongAns1)
    console.log(wrongPattern2, wrongAns2)
    console.log(wrongPattern3, wrongAns3)
    console.log(wrongPattern4, wrongAns4)


    ans1.innerHTML = `<img src="${wrongImg1}"/>`
    ans2.innerHTML = `<img src="${wrongImg2}"/>`
    ans3.innerHTML = `<img src="${wrongImg3}"/>`
    ans4.innerHTML = `<img src="${wrongImg4}"/>`
    
    let correctAnswerIndex = Math.floor(Math.random() * 4)+1;
    let correctAnswerId = "btn" + correctAnswerIndex;
    document.getElementById(correctAnswerId).innerHTML = `<img src="${correctImg}"/>`
    if(correctAnswerIndex == 1){
        wrongAns1 = correctAnswer;
        wrongPattern1 = pattern;
        wrongImg1 = correctImg
    }
    if(correctAnswerIndex == 2){
        wrongAns2 = correctAnswer;
        wrongPattern2 = pattern;
        wrongImg2 = correctImg
    }
    if(correctAnswerIndex == 3){
        wrongAns3 = correctAnswer;
        wrongPattern3 = pattern;
        wrongImg3 = correctImg
    }
    if(correctAnswerIndex == 4){
        wrongAns4 = correctAnswer;
        wrongPattern4 = pattern;
        wrongImg4 = correctImg
    }

}