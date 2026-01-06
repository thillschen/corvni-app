"use strict";

/* =========================
   APP STATE
========================= */
const state = {
  allQuestions: [],
  questions: [],
  index: 0,
  score: 0,
  selected: null,
  confirmed: false,
  orderedMode: false,
  examMode: false
};

/* =========================
   DOM ELEMENTS
========================= */
const ui = {
  question: document.getElementById("question"),
  answers: document.getElementById("answers"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),

  quizType: document.getElementById("quizType"),
  questionCount: document.getElementById("questionCount"),

  toggleTheme: document.getElementById("toggleTheme"),
  orderMode: document.getElementById("orderMode"),
  examMode: document.getElementById("examMode"),

  btnConfirm: document.getElementById("confirm"),
  btnNext: document.getElementById("next"),
  btnPrev: document.getElementById("prev"),
  btnReset: document.getElementById("reset")
};

/* =========================
   INIT
========================= */
init();

function init() {
  bindEvents();
  startQuiz();
}

/* =========================
   EVENTS
========================= */
function bindEvents() {
  ui.btnConfirm.onclick = confirmAnswer;
  ui.btnNext.onclick = nextQuestion;
  ui.btnPrev.onclick = prevQuestion;
  ui.btnReset.onclick = startQuiz;

  ui.quizType.onchange = startQuiz;
  ui.questionCount.onchange = startQuiz;

  ui.orderMode.onclick = toggleOrderMode;
  ui.examMode.onclick = toggleExamMode;
  ui.toggleTheme.onclick = toggleTheme;
}

/* =========================
   QUIZ LOGIC
========================= */
function startQuiz() {
  const count = Number(ui.questionCount.value);
  const type = ui.quizType.value;

  state.allQuestions =
    type === "corvni" ? [...corvniQuestions] : [...srcQuestions];

  state.questions = state.orderedMode
    ? state.allQuestions.slice(0, count)
    : shuffle([...state.allQuestions]).slice(0, count);

  state.index = 0;
  state.score = 0;
  state.selected = null;
  state.confirmed = false;

  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.index];

  state.selected = null;
  state.confirmed = false;
  ui.answers.innerHTML = "";

  ui.question.textContent = q.question.de;
  updateProgress();

  const shuffledAnswers = shuffle([...q.answers]);
  q._shuffledAnswers = shuffledAnswers;

  shuffledAnswers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text.de;
    btn.onclick = () => selectAnswer(btn, i);
    ui.answers.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  if (state.confirmed) return;

  [...ui.answers.children].forEach(b =>
    b.classList.remove("selected")
  );

  button.classList.add("selected");
  state.selected = index;
}

function confirmAnswer() {
  if (state.confirmed || state.selected === null) return;

  state.confirmed = true;
  const answers = state.questions[state.index]._shuffledAnswers;
  const buttons = ui.answers.children;

  [...buttons].forEach((btn, i) => {
    if (answers[i].correct) btn.classList.add("correct");
    if (i === state.selected && !answers[i].correct)
      btn.classList.add("wrong");
  });

  if (answers[state.selected].correct) state.score++;
}

function nextQuestion() {
  if (!state.confirmed) return;

  state.index++;
  state.index >= state.questions.length
    ? showResult()
    : renderQuestion();
}

function prevQuestion() {
  if (state.examMode) return;
  if (state.index === 0) return;
  state.index--;
  renderQuestion();
}

function showResult() {
  const percent = Math.round(
    (state.score / state.questions.length) * 100
  );

  const passed = percent >= 50;

  ui.question.innerHTML = `
    Ergebnis: ${state.score}/${state.questions.length} (${percent}%)<br>
    ${
      state.examMode
        ? `<strong>${passed ? "BESTANDEN ✅" : "NICHT BESTANDEN ❌"}</strong>`
        : ""
    }
  `;

  ui.answers.innerHTML = "";
  ui.progressText.textContent = "Fertig";
  ui.progressFill.style.width = "100%";
}

/* =========================
   UI HELPERS
========================= */
function updateProgress() {
  ui.progressText.textContent =
    `Frage ${state.index + 1} / ${state.questions.length}`;

  ui.progressFill.style.width =
    `${(state.index / state.questions.length) * 100}%`;
}

function toggleOrderMode() {
  state.orderedMode = !state.orderedMode;
  ui.orderMode.textContent =
    state.orderedMode ? "ZUFALL" : "REIHENFOLGE";
  startQuiz();
}

function toggleExamMode() {
  state.examMode = !state.examMode;
  ui.examMode.textContent =
    state.examMode ? "TRAINING" : "PRÜFUNG";
  startQuiz();
}

function toggleTheme() {
  const body = document.body;
  const dark = !body.classList.toggle("light");
  body.classList.toggle("dark", dark);
  ui.toggleTheme.textContent = dark ? "LIGHT" : "DARK";
}

/* =========================
   UTILS
========================= */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}