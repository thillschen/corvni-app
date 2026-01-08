function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
              }
                return arr;
                }

                function startQuiz(mode, exam) {
                  const source = mode === "src" ? srcQuestions : corvniQuestions;
                    const container = document.getElementById(`quiz-${mode}`);
                      let index = 0;
                        let score = 0;

                          const questions = shuffle([...source]).slice(0, 10);

                            function show() {
                                const q = questions[index];
                                    const answers = shuffle([...q.answers]);

                                        container.innerHTML = `
                                              <h4>${index + 1}/${questions.length}<br>${q.question.de}</h4>
                                                    ${answers.map((a, i) =>
                                                            `<button onclick="answer(${i})">${a.text.de}</button>`
                                                                  ).join("")}
                                                                      `;
                                                                        }

                                                                          window.answer = function (i) {
                                                                              const q = questions[index];
                                                                                  if (q.answers[i].correct && exam) score++;
                                                                                      index++;
                                                                                          if (index >= questions.length) {
                                                                                                container.innerHTML = exam
                                                                                                        ? `<strong>${Math.round(score / questions.length * 100)}%</strong>`
                                                                                                                : `<strong>Fertig</strong>`;
                                                                                                                    } else {
                                                                                                                          show();
                                                                                                                              }
                                                                                                                                };

                                                                                                                                  show();
                                                                                                                                  }
}