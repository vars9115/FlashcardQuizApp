let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML is HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used for styling web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds interactivity to websites."
    }
];

let currentCard = 0;

function displayCard() {
    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText =
        flashcards[currentCard].answer;

    document.getElementById("answer").style.display = "none";
}

function showAnswer() {
    document.getElementById("answer").style.display = "block";
}

function nextCard() {
    if(currentCard < flashcards.length - 1){
        currentCard++;
        displayCard();
    }
}

function prevCard() {
    if(currentCard > 0){
        currentCard--;
        displayCard();
    }
}

function addCard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if(q && a){
        flashcards.push({
            question:q,
            answer:a
        });

        alert("Flashcard Added!");

        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";
    }
}

function editCard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if(q && a){
        flashcards[currentCard].question = q;
        flashcards[currentCard].answer = a;

        displayCard();
        alert("Flashcard Updated!");
    }
}

function deleteCard() {
    if(flashcards.length > 1){
        flashcards.splice(currentCard,1);

        if(currentCard >= flashcards.length){
            currentCard = flashcards.length - 1;
        }

        displayCard();
        alert("Flashcard Deleted!");
    } else {
        alert("At least one flashcard must remain.");
    }
}

displayCard();