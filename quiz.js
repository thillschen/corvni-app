let questions = [];
let index = 0;
let language = "de";
let answered = false;

/* Shuffle */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
            }
              return arr;
              }

              /* Theme */
              function toggleTheme() {
                const theme = document.getElementById("themeSelect").value;
                  document.body.className = theme === "dark" ? "dark" : "";
                  }

                  function startQuiz(mode) {
                    language = document.getElementById("langSelect").value;
                      const count = parseInt(document.getElementById("countSelect").value);

                        let source = mode === "src"
                            ? [...window.srcQuestions]
                                : [...window.corvniQuestions];

                                  shuffle(source);
                                    questions = source.slice(0, count);

                                      index = 0;
                                        showQuestion();
                                        }

                                        function showQuestion() {
                                          answered = false;
                                            const q = questions[index];
                                              const answers = shuffle([...q.answers]);
                                                q._answers = answers;

                                                  document.getElementById("quiz").innerHTML = `
                                                      <h3>${index + 1}/${questions.length}<br>${q.question[language]}</h3>
                                                          ${answers.map((a, i) =>
                                                                `<button onclick="answer(${i})">${a.text[language]}</button>`
                                                                    ).join("")}
                                                                      `;
                                                                      }

                                                                      function answer(i) {
                                                                        if (answered) return;
                                                                          answered = true;

                                                                            const buttons = document.querySelectorAll("#quiz button");
                                                                              const answers = questions[index]._answers;

                                                                                buttons.forEach((btn, idx) => {
                                                                                    if (answers[idx].correct) btn.classList.add("correct");
                                                                                        if (idx === i && !answers[idx].correct) btn.classList.add("wrong");
                                                                                          });
                                                                                          }

                                                                                          function nextQuestion() {
                                                                                            if (!questions.length) return;

                                                                                              index++;
                                                                                                if (index >= questions.length) {
                                                                                                    alert("🎉 Quiz beendet!");
                                                                                                        return;
                                                                                                          }
                                                                                                            showQuestion();
                                                                                                            }