let currentQuestion = "";
let answerButtons = document.querySelectorAll('.btn');
let scoreElement = document.getElementById('score');
let timerElement = document.getElementById('timer');
let score = 0;
let timeRemaining = 120;
let correctAnswer = "";
let timerInterval;
let gameStarted = false;
let riteans = document.getElementById('check');
const M_menu = document.getElementById('menu');
const quizarea = document.getElementById('quizar');

document.getElementById('start-btn').onclick = startGame;
document.getElementById('rst').onclick = restartGame;

function startGame() {
    if (gameStarted) return;

    M_menu.style.display = 'none'; 
    quizarea.style.display = 'block'; 

    gameStarted = true;
    score = 0;
    timeRemaining = 120;
    scoreElement.textContent = "Score: " + score;
    timerElement.textContent = "Time Left: " + timeRemaining + "s";
    timerInterval = setInterval(updateTimer, 1000);
    loadNewQuestion(); 
}

function restartGame() {
    gameStarted = false;
    score = 0;
    timeRemaining = 120;
    scoreElement.textContent = "Score: " + score;
    timerElement.textContent = "Time Left: " + timeRemaining + "s";
    riteans.textContent = "";
    clearInterval(timerInterval); 
    startGame(); 
}


function updateTimer() {
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Your score: " + score);
        gameStarted = false;
        M_menu.style.display = 'block'; 
        quizarea.style.display = 'none';
        return;
    }
    timeRemaining--;
    timerElement.textContent = "Time Left: " + timeRemaining + "s";
}

function loadNewQuestion() {
    let questionIndex = Math.floor(Math.random() * 30);
    let questionData = getQuestionData(questionIndex);
    currentQuestion = questionData.question;
    document.getElementById('Test').textContent = currentQuestion;

    answerButtons.forEach((button, index) => {
        button.textContent = questionData.answers[index];
        button.onclick = function() {
            checkAnswer(questionData.answers[index]);
        };
    });

    correctAnswer = questionData.correctAnswer;
}




function getQuestionData(index) {
    const questions = [
        {
            question: "Which tag is used to define a hyperlink in HTML?",
            answers: ["<a>", "<link>", "<href>", "<url>"],
            correctAnswer: "<a>"
        },
        {
            question: "What does CSS stand for?",
            answers: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
            correctAnswer: "Cascading Style Sheets"
        },
        {
            question: "Which HTML tag is used to display an image?",
            answers: ["<image>", "<img>", "<picture>", "<src>"],
            correctAnswer: "<img>"
        },
        {
            question: "What is the correct syntax for creating a comment in JavaScript?",
            answers: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "# This is a comment"],
            correctAnswer: "// This is a comment"
        },
        {
            question: "Which tag is used to define an ordered list in HTML?",
            answers: ["<ol>", "<ul>", "<li>", "<dl>"],
            correctAnswer: "<ol>"
        },
        {
            question: "Which CSS property is used to change the background color of an element?",
            answers: ["background-color", "bg-color", "color", "background"],
            correctAnswer: "background-color"
        },
        {
            question: "In JavaScript, which operator is used to assign a value to a variable?",
            answers: ["=", "==", "===", "=>"],
            correctAnswer: "="
        },
        {
            question: "Which HTML element is used to define the title of a webpage?",
            answers: ["<header>", "<title>", "<h1>", "<meta>"],
            correctAnswer: "<title>"
        },
        {
            question: "Which of the following is used to declare a constant in JavaScript?",
            answers: ["const", "var", "let", "constant"],
            correctAnswer: "const"
        },
        {
            question: "What does the 'border' property do in CSS?",
            answers: ["Adds space around the element", "Sets the color of text", "Defines the border style", "Changes the background color"],
            correctAnswer: "Defines the border style"
        },
        {
            question: "Which HTML tag is used to define a table row?",
            answers: ["<tr>", "<td>", "<th>", "<table>"],
            correctAnswer: "<tr>"
        },
        {
            question: "Which CSS property is used to change the font size?",
            answers: ["font-size", "text-size", "font", "size"],
            correctAnswer: "font-size"
        },
        {
            question: "In JavaScript, which keyword is used to define a function?",
            answers: ["def", "function", "func", "lambda"],
            correctAnswer: "function"
        },
        {
            question: "Which tag is used to create a drop-down list in HTML?",
            answers: ["<input>", "<select>", "<textarea>", "<dropdown>"],
            correctAnswer: "<select>"
        },
        {
            question: "Which CSS property is used to change the text color?",
            answers: ["text-color", "color", "font-color", "background-color"],
            correctAnswer: "color"
        },
        {
            question: "Which JavaScript function is used to write something to the console?",
            answers: ["console.write()", "console.log()", "log.console()", "console.print()"],
            correctAnswer: "console.log()"
        },
        {
            question: "Which of the following is a valid JavaScript array method?",
            answers: ["push()", "pull()", "pop()s", "append()"],
            correctAnswer: "push()"
        },
        {
            question: "How do you add a background image in CSS?",
            answers: ["background: url(image.jpg);", "background-image: 'image.jpg';", "background-image: url(image.jpg);", "background-image: image.jpg;"],
            correctAnswer: "background-image: url(image.jpg);"
        },
        {
            question: "What does the 'href' attribute define in an anchor tag (<a>) in HTML?",
            answers: ["Defines the URL", "Defines the link text", "Defines the target of the link", "Defines the font size"],
            correctAnswer: "Defines the URL"
        },
        {
            question: "In JavaScript, what is the result of 5 + '5'?",
            answers: ["55", "10", "Error", "55 is a number"],
            correctAnswer: "55"
        },
        {
            question: "Which tag is used to define a section of content in HTML?",
            answers: ["<section>", "<div>", "<article>", "<main>"],
            correctAnswer: "<section>"
        },
        {
            question: "What is the correct syntax for linking an external JavaScript file to an HTML document?",
            answers: ["<link src='script.js'>", "<script href='script.js'>", "<script src='script.js'></script>", "<javascript src='script.js'>"],
            correctAnswer: "<script src='script.js'></script>"
        },
        {
            question: "Which property in CSS is used to change the font of an element?",
            answers: ["font-family", "text-family", "font-style", "font-type"],
            correctAnswer: "font-family"
        },
        {
            question: "What is the purpose of the <head> tag in HTML?",
            answers: ["To define the document structure", "To define the content of the webpage", "To include metadata and links", "To include the main content"],
            correctAnswer: "To include metadata and links"
        },
        {
            question: "Which method is used to find an element by its ID in JavaScript?",
            answers: ["getElementById()", "getElementByClass()", "findById()", "querySelector()"],
            correctAnswer: "getElementById()"
        },
        {
            question: "Which of the following is the correct syntax to define a class in CSS?",
            answers: [".classname { }", "#classname { }", "classname { }", "[classname] { }"],
            correctAnswer: ".classname { }"
        },
        {
            question: "Which HTML element is used to display a list of items?",
            answers: ["<ul>", "<ol>", "<li>", "<list>"],
            correctAnswer: "<ul>"
        },
        {
            question: "How do you declare a variable in JavaScript?",
            answers: ["variable x;", "let x;", "var x;", "x = variable;"],
            correctAnswer: "let x;"
        },
        {
            question: "Which property in CSS is used to change the space between lines of text?",
            answers: ["line-spacing", "letter-spacing", "word-spacing", "line-height"],
            correctAnswer: "line-height"
        },
        {
            question: "Which method is used to add an element to the end of an array in JavaScript?",
            answers: ["add()", "push()", "append()", "insert()"],
            correctAnswer: "push()"
        },
        {
            question: "Which tag is used to define an unordered list in HTML?",
            answers: ["<ul>", "<li>", "<ol>", "<ulist>"],
            correctAnswer: "<ul>"
        },
        {
            question: "Which CSS property controls the size of an element's text?",
            answers: ["font-size", "text-size", "size", "font-style"],
            correctAnswer: "font-size"
        }
    ];
    
    return questions[index];
}
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        scoreElement.textContent = "Score: " + score;
    } else {
        timeRemaining -= 10;
        riteans.textContent = "Correct Answer: " + correctAnswer;
    }
    setTimeout(loadNewQuestion, 1000);
}
        
