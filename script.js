let allQuestions = [];
let questions = [];
let index = 0;
let score = 0;
let selected = null;
let confirmed = false;

const qText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const themeBtn = document.getElementById("toggleTheme");

// START
startQuiz();

/* ===== QUIZ ===== */
function startQuiz() {
  const quizType = document.getElementById("quizType").value;
    const countValue = document.getElementById("questionCount").value;

      allQuestions =
          quizType === "corvni"
                ? window.corvniQuestions
                      : window.srcQuestions;

                        if (!allQuestions || allQuestions.length === 0) {
                            qText.textContent = "❌ Keine Fragen geladen";
                                answersDiv.innerHTML = "";
                                    return;
                                      }

                                        const count =
                                            countValue === "all"
                                                  ? allQuestions.length
                                                        : Number(countValue);

                                                          questions = shuffle([...allQuestions]).slice(0, count);
                                                            index = 0;
                                                              score = 0;

                                                                renderQuestion();
                                                                }

                                                                function renderQuestion() {
                                                                  confirmed = false;
                                                                    selected = null;
                                                                      answersDiv.innerHTML = "";

                                                                        const q = questions[index];
                                                                          qText.textContent = q.question.de;

                                                                            progressText.textContent = `Frage ${index + 1} / ${questions.length}`;
                                                                              progressFill.style.width =
                                                                                  `${(index / questions.length) * 100}%`;

                                                                                    const shuffledAnswers = shuffle([...q.answers]);
                                                                                      q._answers = shuffledAnswers;

                                                                                        shuffledAnswers.forEach((a, i) => {
                                                                                            const btn = document.createElement("button");
                                                                                                btn.textContent = a.text.de;

                                                                                                    btn.onclick = () => {
                                                                                                          if (confirmed) return;

                                                                                                                document
                                                                                                                        .querySelectorAll("#answers button")
                                                                                                                                .forEach(b => b.classList.remove("selected"));

                                                                                                                                      btn.classList.add("selected");
                                                                                                                                            selected = i;
                                                                                                                                                };

                                                                                                                                                    answersDiv.appendChild(btn);
                                                                                                                                                      });
                                                                                                                                                      }

                                                                                                                                                      function confirmAnswer() {
                                                                                                                                                        if (confirmed || selected === null) return;

                                                                                                                                                          confirmed = true;
                                                                                                                                                            const answers = questions[index]._answers;

                                                                                                                                                              document.querySelectorAll("#answers button").forEach((btn, i) => {
                                                                                                                                                                  if (answers[i].correct) btn.classList.add("correct");
                                                                                                                                                                      if (i === selected && !answers[i].correct)
                                                                                                                                                                            btn.classList.add("wrong");
                                                                                                                                                                              });

                                                                                                                                                                                if (answers[selected].correct) score++;
                                                                                                                                                                                }

                                                                                                                                                                                function nextQuestion() {
                                                                                                                                                                                  if (!confirmed) return;
                                                                                                                                                                                    index++;
                                                                                                                                                                                      index >= questions.length ? showResult() : renderQuestion();
                                                                                                                                                                                      }

                                                                                                                                                                                      function prevQuestion() {
                                                                                                                                                                                        if (index > 0) {
                                                                                                                                                                                            index--;
                                                                                                                                                                                                renderQuestion();
                                                                                                                                                                                                  }
                                                                                                                                                                                                  }

                                                                                                                                                                                                  function showResult() {
                                                                                                                                                                                                    const percent = Math.round(
                                                                                                                                                                                                        (score / questions.length) * 100
                                                                                                                                                                                                          );

                                                                                                                                                                                                            qText.innerHTML =
                                                                                                                                                                                                                `Ergebnis: ${score}/${questions.length} (${percent}%)`;

                                                                                                                                                                                                                  answersDiv.innerHTML = "";
                                                                                                                                                                                                                    progressText.textContent = "Fertig";
                                                                                                                                                                                                                      progressFill.style.width = "100%";
                                                                                                                                                                                                                      }

                                                                                                                                                                                                                      /* ===== THEME ===== */
                                                                                                                                                                                                                      themeBtn.onclick = () => {
                                                                                                                                                                                                                        const body = document.body;
                                                                                                                                                                                                                          const dark = body.classList.toggle("light") === false;
                                                                                                                                                                                                                            body.classList.toggle("dark", dark);
                                                                                                                                                                                                                              themeBtn.textContent = dark ? "LIGHT" : "DARK";
                                                                                                                                                                                                                              };

                                                                                                                                                                                                                              /* ===== EVENTS ===== */
                                                                                                                                                                                                                              document.getElementById("confirm").onclick = confirmAnswer;
                                                                                                                                                                                                                              document.getElementById("next").onclick = nextQuestion;
                                                                                                                                                                                                                              document.getElementById("prev").onclick = prevQuestion;
                                                                                                                                                                                                                              document.getElementById("reset").onclick = startQuiz;
                                                                                                                                                                                                                              document.getElementById("questionCount").onchange = startQuiz;
                                                                                                                                                                                                                              document.getElementById("quizType").onchange = startQuiz;

                                                                                                                                                                                                                              /* ===== SHUFFLE ===== */
                                                                                                                                                                                                                              function shuffle(arr) {
                                                                                                                                                                                                                                for (let i = arr.length - 1; i > 0; i--) {
                                                                                                                                                                                                                                    const j = Math.floor(Math.random() * (i + 1));
                                                                                                                                                                                                                                        [arr[i], arr[j]] = [arr[j], arr[i]];
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                            return arr;
                                                                                                                                                                                                                                            }