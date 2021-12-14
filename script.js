const quizData = [
    {
        question: 'How old are you?',
        a: '10',
        b: '18',
        c: '20',
        d: '7',
        correct: 'b'
    },
    {
        question: 'What is the most used programing language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrel',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '9095',
        b: '9045',
        c: '2000',
        d: '9345',
        correct: 'a'
    }
]


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deleteAnswers();

    const currentQuizData = quizData[currentQuiz]
    questionE1.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}


function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}


function deleteAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show results
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

})