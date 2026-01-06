let currentLanguage = "de";
let currentQuiz = "corvni";
let questions = [];
let index = 0;
let score = 0;
let confirmed = false;

const box = document.getElementById("question-box");
const progress = document.getElementById("progress");
const title = document.getElementById("quiz-title");

// ---------- INIT ----------
loadQuiz("corvni");

// ---------- QUIZ ----------
function loadQuiz(type) {
  currentQuiz = type;
  index = 0;
  score = 0;

  questions = type === "corvni"
    ? [...corvniQuestions]
    : [...srcQuestions];

  shuffle(questions);
  title.textContent = type.toUpperCase();
  render();
}

function render() {
  confirmed = false;
  box.innerHTML = "";

  const q = questions[index];
  progress.textContent = `Frage ${index + 1} / ${questions.length}`;

  const h3 = document.createElement("h3");
  h3.textContent = q.question[currentLanguage];
  box.appendChild(h3);

  q.answers.forEach((a, i) => {
    const label = document.createElement("label");
    label.style.display = "block";

    const r = document.createElement("input");
    r.type = "radio";
    r.name = "answer";
    r.value = i;

    label.appendChild(r);
    label.append(" " + a.text[currentLanguage]);
    box.appendChild(label);
  });
}

function confirmAnswer() {
  if (confirmed) return;

  const sel = document.querySelector('input[name="answer"]:checked');
  if (!sel) return alert("Bitte Antwort auswählen");

  confirmed = true;
  const q = questions[index];
  const i = sel.value;

  if (q.answers[i].correct) {
    score++;
    sel.parentElement.classList.add("correct");
  } else {
    sel.parentElement.classList.add("incorrect");
    q.answers.forEach((a, j) => {
      if (a.correct) {
        box.querySelectorAll("label")[j + 1].classList.add("correct");
      }
    });
  }
}

function next() {
  if (!confirmed) return alert("Bitte bestätigen");
  index++;

  if (index >= questions.length) {
    result();
  } else {
    render();
  }
}

function prev() {
  if (index > 0) {
    index--;
    render();
  }
}

function result() {
  box.innerHTML = `
    <h2>Ergebnis</h2>
    <p>${score} von ${questions.length} richtig</p>
    <h3>${score >= questions.length * 0.75 ? "✅ Bestanden" : "❌ Nicht bestanden"}</h3>
  `;
  progress.textContent = "";
}

// ---------- TOOLS ----------
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

// ---------- EVENTS ----------
document.getElementById("confirm").onclick = confirmAnswer;
document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;

document.getElementById("quiz-corvni").onclick = () => loadQuiz("corvni");
document.getElementById("quiz-src").onclick = () => loadQuiz("src");

document.getElementById("lang-de").onclick = () => {
  currentLanguage = "de";
  render();
};
document.getElementById("lang-fr").onclick = () => {
  currentLanguage = "fr";
  render();
};

document.getElementById("toggle-dark").onclick = () =>
  document.body.className = "dark-mode";
document.getElementById("toggle-light").onclick = () =>
  document.body.className = "light-mode";
