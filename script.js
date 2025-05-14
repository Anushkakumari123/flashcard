const questions = [
    {
        question: "who is the founder of Google?",
        answers: [
            { text: "Steve jobs", correct: false},
            { text: "Bill Gates", correct: false},
            { text: "Larry Page and Sergey Brin", correct: true},
            { text: "Mark Zuckerberg", correct: false},
        ]
    },
    {
        question:"who is the founder of Microsoft?",
        answers:[
            {text:"Steve jobs",correct:false},
            {text:"Mark Zuckerberg",correct:false},
            {text:"Elon Musk",correct:false},
            {text:"Bill Gates and Paul allen",correct:true},
        ]   
    },
    {
        question:"who is the founder of Facebook?",
        answers:[
            {text:"Jeff Bezon",correct:false},
            {text:"Larry Ellison",correct:false},
            {text:"Mark Zuckberg",correct:true},
            {text:"Sundar Pichai",correct:false},
        ]   
    },
    {
        question:"who is the founder of Amazon?",
        answers:[
            {text:"Elon Musk",correct:false},
            {text:"Larry Page",correct:false},
            {text:"Jeff Bezos",correct:true},
            {text:"Jack Dorsey",correct:false},
        ]   
    },
    {
        question:"who is the founder of Apple Inc.?",
        answers:[
            {text:"Elon Musk",correct:false},
            {text:"Bill Gates",correct:false},
            {text:"steve Jobs,Steve Wozniak,and Ronald Wayne",correct:true},
            {text:"Larry page",correct:false},
        ]   
    },
    {
        question:"who is the founder of Tesla Inc.?",
        answers:[
            {text:"Larry Page",correct:false},
            {text:"Bill Gates",correct:false},
            {text:"Tim cook",correct:false},
            {text:"Elon Musk",correct:true},
        ]   
    },
    {
        question:"who is the founder of Twitter?",
        answers:[
            {text:"Jack Dorsey",correct:true},
            {text:"Bill Gates",correct:false},
            {text:"Larry Page and Sergey Brin",correct:false},
            {text:"Mark Zuckerberg",correct:false},
        ]   
    },
    {
        question:"who is the founder of Instagram?",
        answers:[
            {text:"Steve jobs",correct:false},
            {text:"Bill Gates",correct:false},
            {text:"Kevin Systron and Mike Krieger",correct:true},
            {text:"Mark Zuckerberg",correct:false},
        ]   
    },
    {
        question:"who is the founder of Linkdin?",
        answers:[
            {text:"Jack Ma",correct:false},
            {text:"Reid Hoffman",correct:true},
            {text:"Larry Ellison",correct:false},
            {text:"Jeff Bezos",correct:false},
        ]   
    },
    {
        question:"who is the founder of YouTube?",
        answers:[
            {text:"Steve jobs",correct:false},
            {text:"Bill Gates",correct:false},
            {text:"Larry Page and Sergey Brin",correct:true},
            {text:"Mark Zuckerberg",correct:false},
        ]   
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
     });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const iscorrect =selectedBtn.dataset.correct == "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();