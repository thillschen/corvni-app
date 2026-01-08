let questions = [];
let index = 0;
let language = "de";
let quizActive = false;
let examMode = false;
let score = 0;

/* ---------- Utilities ---------- */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
            }
              return arr;
              }

              function toggleTheme() {
                const theme = document.getElementById("themeSelect").value;
                  document.body.className = theme === "light" ? "light" : "";
                  }

                  /* ---------- WICHTIG: Fragen sicher holen ---------- */
                  function getSource(mode) {
                    if (mode === "src") {
                        return (
                              typeof srcQuestions !== "undefined" && srcQuestions ||
                                    window.srcQuestions ||
                                          []
                                              );
                                                }
                                                  if (mode === "corvni") {
                                                      return (
                                                            typeof corvniQuestions !== "undefined" && corvniQuestions ||
                                                                  window.corvniQuestions ||
                                                                        []
                                                                            );
                                                                              }
                                                                                return [];
                                                                                }

                                                                                /* ---------- Start ---------- */
                                                                                function startQuiz(mode) {
                                                                                  examMode = false;
                                                                                    start(mode);
                                                                                    }

                                                                                    function startExam(mode) {
                                                                                      examMode = true;
                                                                                        score = 0;
                                                                                          start(mode);
                                                                                          }

                                                                                          function start(mode) {
                                                                                            language = document.getElementById("langSelect").value;
                                                                                              const countValue = document.getElementById("countSelect").value;

                                                                                                const source = getSource(mode);

                                                                                                  if (!Array.isArray(source) || source.length === 0) {
                                                                                                      alert("❌ Fragen konnten nicht geladen werden.");
                                                                                                          console.error("Quelle:", source);
                                                                                                              return;
                                                                                                                }

                                                                                                                  if (countValue === "all") {
                                                                                                                      questions = [...source]; // geordnet
                                                                                                                        } else {
                                                                                                                            questions = shuffle([...source]).slice(0, parseInt(countValue));
                                                                                                                              }

                                                                                                                                index = 0;
                                                                                                                                  quizActive = true;
                                                                                                                                    document.getElementById("nextBtn").disabled = false;
                                                                                                                                      showQuestion();
                                                                                                                                      }

                                                                                                                                      /* ---------- Anzeige ---------- */
                                                                                                                                      function showQuestion() {
                                                                                                                                        if (!quizActive || !questions[index]) return;

                                                                                                                                          const q = questions[index];
                                                                                                                                            const answers = shuffle([...q.answers]);
                                                                                                                                              q._answers = answers;

                                                                                                                                                document.getElementById("quiz").innerHTML = `
                                                                                                                                                    <h3>${index + 1} / ${questions.length}<br>${q.question[language]}</h3>
                                                                                                                                                        ${answers.map((a, i) =>
                                                                                                                                                              `<button onclick="answer(${i})">${a.text[language]}</button>`
                                                                                                                                                                  ).join("")}
                                                                                                                                                                    `;
                                                                                                                                                                    }

                                                                                                                                                                    /* ---------- Antwort ---------- */
                                                                                                                                                                    function answer(i) {
                                                                                                                                                                      const q = questions[index];
                                                                                                                                                                        const answers = q._answers;
                                                                                                                                                                          const buttons = document.querySelectorAll("#quiz button");

                                                                                                                                                                            buttons.forEach(btn => btn.disabled = true);

                                                                                                                                                                              if (answers[i].correct) {
                                                                                                                                                                                  buttons[i].classList.add("correct");
                                                                                                                                                                                      if (examMode) score++;
                                                                                                                                                                                        } else {
                                                                                                                                                                                            buttons[i].classList.add("wrong");
                                                                                                                                                                                                if (!examMode) {
                                                                                                                                                                                                      answers.forEach((a, idx) => {
                                                                                                                                                                                                              if (a.correct) buttons[idx].classList.add("correct");
                                                                                                                                                                                                                    });
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                          /* ---------- Weiter ---------- */
                                                                                                                                                                                                                          function nextQuestion() {
                                                                                                                                                                                                                            if (!quizActive) return;

                                                                                                                                                                                                                              index++;
                                                                                                                                                                                                                                if (index >= questions.length) {
                                                                                                                                                                                                                                    endQuiz();
                                                                                                                                                                                                                                        return;
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                            showQuestion();
                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            /* ---------- Ende ---------- */
                                                                                                                                                                                                                                            function endQuiz() {
                                                                                                                                                                                                                                              quizActive = false;
                                                                                                                                                                                                                                                document.getElementById("nextBtn").disabled = true;

                                                                                                                                                                                                                                                  if (examMode) {
                                                                                                                                                                                                                                                      const percent = Math.round((score / questions.length) * 100);
                                                                                                                                                                                                                                                          const passed = percent >= 50;

                                                                                                                                                                                                                                                              document.getElementById("quiz").innerHTML = `
                                                                                                                                                                                                                                                                    <h2>📝 Prüfung beendet</h2>
                                                                                                                                                                                                                                                                          <p>Punkte: ${score} / ${questions.length}</p>
                                                                                                                                                                                                                                                                                <p><strong>${passed ? "BESTANDEN ✅" : "NICHT BESTANDEN ❌"}</strong></p>
                                                                                                                                                                                                                                                                                      <p>${percent} % (Bestehensgrenze 50 %)</p>
                                                                                                                                                                                                                                                                                          `;
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                document.getElementById("quiz").innerHTML =
                                                                                                                                                                                                                                                                                                      "<h2>🎉 Lernmodus beendet</h2>";
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        }