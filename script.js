const startButton = document.querySelector(".start");
const easyButton = document.querySelector(".easy");
const normalButton = document.querySelector(".normal");
const hardButton = document.querySelector(".hard");
const startGame = document.querySelector(".startGame");
const next = document.querySelector(".next");
const playAgain = document.querySelector(".again")
const homeButton = document.querySelector(".home")

const title = document.querySelector(".startPage");
const difficulty = document.querySelector(".selectionPage");
const instruction = document.querySelector(".instructionPage");
const game = document.querySelector(".gamePage");
const final = document.querySelector(".finalPage");

const tiles = document.querySelectorAll(".tile");
const popUp = document.querySelector(".popUp");

const questionNumber = document.querySelector(".questionNumber");
const ans1 = document.getElementById("btn1");
const ans2 = document.getElementById("btn2");
const ans3 = document.getElementById("btn3");
const ans4 = document.getElementById("btn4");
const mark = document.querySelector(".mark");
const word = document.querySelector(".words");
const correctImage = document.querySelector(".correctAnswer");
const medal = document.querySelector(".medal")
const words = document.querySelector(".words2")
const scoreText = document.querySelector(".scoreText")

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")
const clap = document.getElementById("clap")
const correctSound = document.getElementById("correct")
const wrongSound = document.getElementById("wrong")

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

var wrongAns1;
var wrongAns2;
var wrongAns3;
var wrongAns4;

var wrongImg1;
var wrongImg2;
var wrongImg3;
var wrongImg4;

var wrongPattern1
var wrongPattern2
var wrongPattern3
var wrongPattern4

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
const allTiles = [
    {number:"1", pattern:"0",image: "./img/Mahjong Tile 1.png"},
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 2.png"},
    {number:"3", pattern:"0",image: "./img/Mahjong Tile 3.png"},
    {number:"4", pattern:"0",image: "./img/Mahjong Tile 4.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"6", pattern:"0",image: "./img/Mahjong Tile 6.png"},
    {number:"7", pattern:"0",image: "./img/Mahjong Tile 7.png"},
    {number:"8", pattern:"0",image: "./img/Mahjong Tile 8.png"},
    {number:"9", pattern:"0",image: "./img/Mahjong Tile 9.png"},

    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"2", pattern:"1",image: "./img/Mahjong Tile 11.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"4", pattern:"1",image: "./img/Mahjong Tile 13.png"},
    {number:"5", pattern:"1",image: "./img/Mahjong Tile 14.png"},
    {number:"6", pattern:"1",image: "./img/Mahjong Tile 15.png"},
    {number:"7", pattern:"1",image: "./img/Mahjong Tile 16.png"},
    {number:"8", pattern:"1",image: "./img/Mahjong Tile 17.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},

    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"2", pattern:"2",image: "./img/Mahjong Tile 20.png"},
    {number:"3", pattern:"2",image: "./img/Mahjong Tile 21.png"},
    {number:"4", pattern:"2",image: "./img/Mahjong Tile 22.png"},
    {number:"5", pattern:"2",image: "./img/Mahjong Tile 23.png"},
    {number:"6", pattern:"2",image: "./img/Mahjong Tile 24.png"},
    {number:"7", pattern:"2",image: "./img/Mahjong Tile 25.png"},
    {number:"8", pattern:"2",image: "./img/Mahjong Tile 26.png"},
    {number:"9", pattern:"2",image: "./img/Mahjong Tile 27.png"},
    
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"2", pattern:"3",image: "./img/Mahjong Tile 29.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"},
    {number:"5", pattern:"3",image: "./img/Mahjong Tile 32.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
    {number:"7", pattern:"3",image: "./img/Mahjong Tile 34.png"},
]

const Question15 =[
    {number:"12", pattern:"0", image:"./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0", image:"./img/Mahjong Tile 33.png"},
    {number:"12", pattern:"0", image:"./img/Mahjong Tile 33.png"},
    {number:"15", pattern:"2", image:"./img/Mahjong Tile 30.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
    {number:"17", pattern:"3",image: "./img/Mahjong Tile 34.png"},
    {number:"17", pattern:"3",image: "./img/Mahjong Tile 34.png"},
    {number:"17", pattern:"3",image: "./img/Mahjong Tile 34.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"},
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"}
];
const Question14 =[
    {number:"1", pattern:"0", image:"./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0", image:"./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"0", image:"./img/Mahjong Tile 1.png"},
    {number:"1", pattern:"2", image:"./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"1", pattern:"2",image: "./img/Mahjong Tile 19.png"},
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"},
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"},
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"9", pattern:"1",image: "./img/Mahjong Tile 18.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"}
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
    {number:"5", pattern:"3",image: "./img/Mahjong Tile 32.png"},
    {number:"5", pattern:"3",image: "./img/Mahjong Tile 32.png"},
    {number:"1", pattern:"1",image: "./img/Mahjong Tile 10.png"},
    {number:"2", pattern:"1",image: "./img/Mahjong Tile 11.png"},
    {number:"3", pattern:"1",image: "./img/Mahjong Tile 12.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
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
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
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
    {number:"0", pattern:"3", image:"./img/Mahjong Tile 29.png"},
    {number:"2", pattern:"3",image: "./img/Mahjong Tile 29.png"},
    {number:"2", pattern:"3",image: "./img/Mahjong Tile 29.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"5", pattern:"0",image: "./img/Mahjong Tile 5.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"5", pattern:"3",image: "./img/Mahjong Tile 32.png"},
    {number:"5", pattern:"3",image: "./img/Mahjong Tile 32.png"}
];
const Question8 =[
    {number:"4", pattern:"3", image:"./img/Mahjong Tile 31.png"},
    {number:"4", pattern:"3", image:"./img/Mahjong Tile 31.png"},
    {number:"4", pattern:"3", image:"./img/Mahjong Tile 31.png"},
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
    {number:"4", pattern:"3",image: "./img/Mahjong Tile 31.png"},
    {number:"5", pattern:"3",image: "./img/Mahjong Tile 32.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
    {number:"13", pattern:"0", image:"./img/Mahjong Tile 34.png"},
    {number:"1", pattern:"3",image: "./img/Mahjong Tile 28.png"},
    {number:"2", pattern:"3",image: "./img/Mahjong Tile 29.png"},
    {number:"3", pattern:"3",image: "./img/Mahjong Tile 30.png"},
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
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
    {number:"6", pattern:"3",image: "./img/Mahjong Tile 33.png"},
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

const allQuestion =[ Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10,Question11,Question12,Question13,Question14,Question15]

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        title.classList.add("hide")
        Selectdifficulty = true;
        currentInstruction = 0
        score = 0
        answerchoosen = false
        difficulty.classList.remove("hide")
    }, 200);
})

easyButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        easyQuestions = true;
        totalQuestion = 5;
        Ready()
    }, 200);
})

normalButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        normalQuestions = true;
        totalQuestion = 10;
        Ready()
    }, 200);
})
hardButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        hardQuestions = true;
        totalQuestion = 20;
        Ready()
    }, 200);
})

startGame.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        instruction.classList.add("hide")
        Began()
    }, 200);
})

next.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        answerchoosen = false
        popUp.classList.add("hide")
        let allChoosen = document.querySelectorAll(".chosen");
        allChoosen.forEach(function(item){
            item.classList.remove("chosen")
        })
        Question()
    }, 200);
})

playAgain.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        title.classList.remove("hide")
        final.classList.add("hide")
        easyQuestions = false;
        normalQuestions = false;
        hardQuestions = false;
    }, 200);
})

homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
      location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
})

for(let x = 1; x < 5; x++){
    let currentClass = "btn" + x
    let currentButton = document.getElementById(currentClass)
    currentButton.addEventListener("click", () => {
        if(!answerchoosen){
            let choice = currentButton.getAttribute("answer")
            let choicePattern = currentButton.getAttribute("pattern")
            currentButton.classList.add("chosen")
            playClickSound()
            answerchoosen = true;
            if(choice == correctAnswer  && choicePattern == pattern){
                correctSound.currentTime = 0
                correctSound.play()
                score += 1;
                correctImage.src = correctImg
                mark.src = "./img/correct.png"
                word.textContent = "Correct!"
            }
            else{
                wrongSound.currentTime = 0
                wrongSound.play()
                console.log("wrong")
                correctImage.src = correctImg
                mark.src = "./img/wrong.png"
                word.textContent = "Good try!"
            }
            setTimeout(() =>{
                popUp.classList.remove("hide")
            },500)
        }
    })
}

function Began(){
    current = 0;
    choosenAnswer = false
    Question()
}

function Ready(){
    difficulty.classList.add("hide")
    game.classList.remove("hide")
    instruction.classList.remove("hide")
}

function Question(){
    let pass = totalQuestion /2;
    if(current == totalQuestion){
        console.log(score)
        final.classList.remove("hide")
        game.classList.add("hide")
        let starScore = totalQuestion / 5;
        if(score == totalQuestion){
            clap.currentTime = 0
            clap.play()
            scoreText.textContent = "Excellent!"
            medal.src = "./img/Excellent.png"
        }
        else if(score >= pass){
            completed.currentTime = 0
            completed.play()
            scoreText.textContent = "Well done!"
            if(score < totalQuestion && score >= totalQuestion - starScore) // score < total && score >= 8
                medal.src = "./img/Well Done.png"
            else if(score < totalQuestion - starScore && score >= (totalQuestion - starScore - starScore)) // score < 8 && score >= 6
                medal.src = "./img/Well Done1.png"
            else
                medal.src = "./img/You Tried.png"
        }
        else if(score < pass){
            lose.currentTime = 0
            lose.play()
            scoreText.textContent = "You tried!"
            if(score == starScore + starScore)
                medal.src = "./img/You Tried.png"
            else if(score < starScore + starScore && score >= starScore) // score < 4 && score >= 2
                medal.src = "./img/You Tried1.png"
            else
                medal.src = "./img/You Tried2.png"
        }
        words.innerHTML = score + "/" + totalQuestion
        return
    }
    current += 1;
    let newQuestion
    let randomQuestionIndex = Math.floor(Math.random() * 15);

    newQuestion = window["Question" + (randomQuestionIndex - 1)]
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

    questionNumber.innerHTML = current + "/" + totalQuestion;


    //Randomising one question tile
    let missingTile = Math.floor(Math.random() * newQuestion.length);
    correctImg = newQuestion[missingTile].image;
    correctAnswer = newQuestion[missingTile].number;
    pattern = newQuestion[missingTile].pattern;

    //Tempo array for all tiles
    let alltilesTempoArray = []
    for(let i = 0; i < allTiles.length; i++){
        alltilesTempoArray.push(allTiles[i])
    }

    //Remove similar answer
    for(let i = 3; i > -1; i--){
        
        let similarAnswer = (parseInt(newQuestion[missingTile].number) + (i * 9)) - 1
        console.log(newQuestion[missingTile].number)
        console.log(i * 9)
        console.log(similarAnswer)
        alltilesTempoArray.splice(similarAnswer,1)
        console.log(i)
    }

    console.log(alltilesTempoArray)

    if(easyQuestions == true){
        newQuestion[missingTile].image = "./img/Mahjong Tile Question Mark.png"
    }

    if(normalQuestions == true || hardQuestions == true){
        
        if(normalQuestions == true){
            newQuestion[missingTile].image = "./img/Mahjong Tile Question Mark.png"
        }

        if(hardQuestions == true){
            let newTileNumber = Math.floor(Math.random() * alltilesTempoArray.length);
            newQuestion[missingTile].image = alltilesTempoArray[newTileNumber].image
            alltilesTempoArray.splice(newTileNumber,1)
        }

        ////temporary array
        let tempArray = [] ;
        for (let i = 0; i < newQuestion.length; i++) {
            tempArray.push(newQuestion[i]);
        }

        //initializes tile array
        let tileArray = [];

        console.log(newQuestion)
        //Random object selection
        for (let i = 0; i < newQuestion.length; i++) {
            console.log(i)
            console.log(newQuestion.length)
            const randomIndex = Math.floor(Math.random() * tempArray.length);
            tileArray.push(tempArray[randomIndex]);
            //once selected remove the object from temp array
            tempArray.splice(randomIndex, 1);
        }
    }

    //showing question
    let currentTile = 0
    tiles.forEach(function(item){
        item.src = newQuestion[currentTile].image;
        currentTile += 1;
    })
    newQuestion[missingTile].image = correctImg;

    //Making all btn to wrong answer
    for(let x = 1; x < 5; x ++){
        let randomChoice = Math.floor(Math.random() * alltilesTempoArray.length);

        let randomTile = alltilesTempoArray[randomChoice];

        let btnClass = "btn" + x
        let btn = document.getElementById(btnClass)

        btn.setAttribute("answer", randomTile.number)
        btn.setAttribute("pattern", randomTile.pattern)
        btn.innerHTML = `<img src="${randomTile.image}"/>`

        alltilesTempoArray.splice(randomTile, 1)
    }
    
    //Changing one btn to correct answer
    let correctAnswerIndex = Math.floor(Math.random() * 4)+1;
    let correctAnswerId = "btn" + correctAnswerIndex;
    let correctBtn = document.getElementById(correctAnswerId)
    correctBtn.innerHTML = `<img src="${correctImg}"/>`
    correctBtn.setAttribute("answer", correctAnswer)
    correctBtn.setAttribute("pattern", pattern)
}

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });