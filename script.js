/* =========================
   GLOBALER STATUS
      ========================= */

      let currentMode = "src";   // src oder corvni
      let questions = [];
      let index = 0;
      let examMode = false;
      let score = 0;
      let language = "de";

      /* =========================
         HILFSFUNKTIONEN
            ========================= */

            function shuffle(arr) {
              for (let i = arr.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                      [arr[i], arr[j]] = [arr[j], arr[i]];
                        }
                          return arr;
                          }

                          /* =========================
                             UI STEUERUNG
                                ========================= */

                                function setMode(mode) {
                                  currentMode = mode;
                                    alert(
                                        mode === "src"
                                              ? "SRC – Seefunk gewählt"
                                                    : "CORVNI – Binnenfunk gewählt"
                                                      );
                                                      }

                                                      function toggleTheme() {
                                                        const theme = document.getElementById("themeSelect").value;
                                                          document.body.classList.toggle("dark", theme === "dark");
                                                          }

                                                          /* =========================
                                                             QUIZ START
                                                                ========================= */

                                                                function startQuiz(isExam) {
                                                                  examMode = isExam;
                                                                    score = 0;
                                                                      index = 0;

                                                                        language = document.getElementById("langSelect").value;
                                                                          const countValue = document.getElementById("countSelect").value;

                                                                            const source =
                                                                                currentMode === "src" ? srcQuestions : corvniQuestions;

                                                                                  if (!Array.isArray(source) || source.length === 0) {
                                                                                      alert("❌ Fragen konnten nicht geladen werden.");
                                                                                          return;
                                                                                            }

                                                                                              if (countValue === "all") {
                                                                                                  questions = [...source]; // geordnet
                                                                                                    } else {
                                                                                                        questions = shuffle([...source]).slice(0, parseInt(countValue));
                                                                                                          }

                                                                                                            document.getElementById("nextBtn").disabled = false;
                                                                                                              showQuestion();
                                                                                                              }

                                                                                                              /* =========================
                                                                                                                 FRAGE ANZEIGEN
                                                                                                                    ========================= */

                                                                                                                    function showQuestion() {
                                                                                                                      const q = questions[index];
                                                                                                                        const answers = shuffle([...q.answers]);
                                                                                                                          q._answers = answers;

                                                                                                                            document.getElementById("quiz").innerHTML = `
                                                                                                                                <h3>${index + 1} / ${questions.length}</h3>
                                                                                                                                    <p>${q.question[language]}</p>
                                                                                                                                        ${answers
                                                                                                                                              .map(
                                                                                                                                                      (a, i) =>
                                                                                                                                                                `<button onclick="answer(${i})">${a.text[language]}</button>`
                                                                                                                                                                      )
                                                                                                                                                                            .join("")}
                                                                                                                                                                              `;
                                                                                                                                                                              }

                                                                                                                                                                              /* =========================
                                                                                                                                                                                 ANTWORT
                                                                                                                                                                                    ========================= */

                                                                                                                                                                                    function answer(i) {
                                                                                                                                                                                      const q = questions[index];
                                                                                                                                                                                        const answers = q._answers;
                                                                                                                                                                                          const buttons = document.querySelectorAll("#quiz button");

                                                                                                                                                                                            buttons.forEach(btn => (btn.disabled = true));

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

                                                                                                                                                                                                                                          /* =========================
                                                                                                                                                                                                                                             NÄCHSTE FRAGE
                                                                                                                                                                                                                                                ========================= */

                                                                                                                                                                                                                                                function nextQuestion() {
                                                                                                                                                                                                                                                  index++;

                                                                                                                                                                                                                                                    if (index >= questions.length) {
                                                                                                                                                                                                                                                        endQuiz();
                                                                                                                                                                                                                                                            return;
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                showQuestion();
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                /* =========================
                                                                                                                                                                                                                                                                   QUIZ ENDE
                                                                                                                                                                                                                                                                      ========================= */

                                                                                                                                                                                                                                                                      function endQuiz() {
                                                                                                                                                                                                                                                                        document.getElementById("nextBtn").disabled = true;

                                                                                                                                                                                                                                                                          if (examMode) {
                                                                                                                                                                                                                                                                              const percent = Math.round((score / questions.length) * 100);
                                                                                                                                                                                                                                                                                  const passed = percent >= 50;

                                                                                                                                                                                                                                                                                      document.getElementById("quiz").innerHTML = `
                                                                                                                                                                                                                                                                                            <h2>📝 Prüfung beendet</h2>
                                                                                                                                                                                                                                                                                                  <p>Punkte: ${score} / ${questions.length}</p>
                                                                                                                                                                                                                                                                                                        <p><strong>${passed ? "BESTANDEN ✅" : "NICHT BESTANDEN ❌"}</strong></p>
                                                                                                                                                                                                                                                                                                              <p>${percent}% (Bestehensgrenze: 50%)</p>
                                                                                                                                                                                                                                                                                                                  `;
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                        document.getElementById("quiz").innerHTML = `
                                                                                                                                                                                                                                                                                                                              <h2>🎉 Lernmodus beendet</h2>
                                                                                                                                                                                                                                                                                                                                    <p>Du hast alle Fragen durchgearbeitet.</p>
                                                                                                                                                                                                                                                                                                                                        `;
                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                          }