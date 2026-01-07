document.addEventListener("DOMContentLoaded", function () { const resetButton = document.getElementById("reset"); const languageToggleDe = document.getElementById("toggle-language-de"); const languageToggleFr = document.getElementById("toggle-language-fr"); const lightModeButton = document.getElementById("toggle-light"); const darkModeButton = document.getElementById("toggle-dark");

  let currentLanguage = "de"; let examMode = false; // Prüfungsmodus let randomMode = false; // geordnet / zufällig let questionLimit = "all"; // 10,20,30,all let score = 0; let answered = 0;

  /* ================= UI: Prüfungsmodus ================= */ const header = document.querySelector("header"); const examControls = document.createElement("div"); examControls.style.marginTop = "10px";

  examControls.innerHTML = <label> <input type="checkbox" id="exam-mode" /> Prüfungsmodus (50%) </label> <br/><br/> <label>Anzahl Fragen:</label> <select id="question-count"> <option value="10">10</option> <option value="20">20</option> <option value="30">30</option> <option value="all" selected>Alle</option> </select> <br/><br/> <label>Fragenbereich:</label><br/> <label><input type="checkbox" id="src-only" checked /> SRC</label> <label style="margin-left:10px"><input type="checkbox" id="corvni-only" checked /> CORVNI</label> <br/><br/> <button id="ordered-quiz">Geordnet</button> <button id="random-quiz">Zufällig</button> <div id="exam-result" style="margin-top:10px;font-weight:bold"></div>; `;

  header.appendChild(examControls);

  const examModeToggle = document.getElementById("exam-mode"); const questionCountSelect = document.getElementById("question-count"); const orderedBtn = document.getElementById("ordered-quiz"); const randomBtn = document.getElementById("random-quiz"); const examResult = document.getElementById("exam-result"); const srcOnlyToggle = document.getElementById("src-only"); const corvniOnlyToggle = document.getElementById("corvni-only");

  examModeToggle.addEventListener("change", () => { examMode = examModeToggle.checked; resetQuiz(); });

  questionCountSelect.addEventListener("change", () => { questionLimit = questionCountSelect.value; resetQuiz(); });

  orderedBtn.addEventListener("click", () => { randomMode = false; resetQuiz(); });

  randomBtn.addEventListener("click", () => { randomMode = true; resetQuiz(); });

  srcOnlyToggle.addEventListener("change", resetQuiz); corvniOnlyToggle.addEventListener("change", resetQuiz);

  /* ================= Logik ================= */("click", () => { randomMode = true; resetQuiz(); });

  /* ================= Logik ================= */

  function prepareQuestions(allQuestions) { let questions = [...allQuestions];

  if (randomMode) shuffleArray(questions);

  if (questionLimit !== "all") {
    questions = questions.slice(0, Number(questionLimit));
    }

    return questions;

    }

    function loadQuestions(questions, containerId) { const container = document.getElementById(containerId); container.innerHTML = '';

    questions.forEach((questionObj, index) => {
      const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

          const questionText = document.createElement("p");
            questionText.textContent = `${index + 1}. ${questionObj.question[currentLanguage]}`;
              questionDiv.appendChild(questionText);

                const optionsList = document.createElement("ul");
                  optionsList.classList.add("options");

                    shuffleArray(questionObj.answers);

                      questionObj.answers.forEach(answer => {
                          const optionItem = document.createElement("li");
                              const checkbox = document.createElement("input");
                                  checkbox.type = "checkbox";
                                      checkbox.classList.add("option-checkbox");

                                          checkbox.addEventListener("change", () => handleAnswerClick(checkbox, answer, questionObj, optionsList));

                                              const label = document.createElement("label");
                                                  label.textContent = answer.text[currentLanguage];

                                                      optionItem.appendChild(checkbox);
                                                          optionItem.appendChild(label);
                                                              optionsList.appendChild(optionItem);
                                                                });

                                                                  questionDiv.appendChild(optionsList);
                                                                    container.appendChild(questionDiv);
                                                                    });

                                                                    }

                                                                    function handleAnswerClick(checkbox, answer, questionObj, optionsList) { optionsList.querySelectorAll(".option-checkbox").forEach(cb => cb.disabled = true); answered++;

                                                                    if (answer.correct) {
                                                                      score++;
                                                                        if (!examMode) checkbox.parentElement.querySelector("label").classList.add("correct");
                                                                        } else if (!examMode) {
                                                                          checkbox.parentElement.querySelector("label").classList.add("incorrect");
                                                                            optionsList.querySelectorAll("label").forEach((label, i) => {
                                                                                if (questionObj.answers[i].correct) label.classList.add("correct");
                                                                                  });
                                                                                  }

                                                                                  if (examMode) checkExamResult();

                                                                                  }

                                                                                  function checkExamResult() { const total = document.querySelectorAll('.question').length; if (answered === total) { const percent = Math.round((score / total) * 100); examResult.textContent = percent >= 50 ? Bestanden: ${percent}% : Nicht bestanden: ${percent}%; } }

                                                                                  function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }

                                                                                  function resetQuiz() { score = 0; answered = 0; examResult.textContent = "";

                                                                                  if (srcOnlyToggle.checked) {
                                                                                    const preparedSRC = prepareQuestions(srcQuestions);
                                                                                      loadQuestions(preparedSRC, "src-questions");
                                                                                      } else {
                                                                                        document.getElementById("src-questions").innerHTML = "";
                                                                                        }

                                                                                        if (corvniOnlyToggle.checked) {
                                                                                          const preparedCORVNI = prepareQuestions(corvniQuestions);
                                                                                            loadQuestions(preparedCORVNI, "corvni-questions");
                                                                                            } else {
                                                                                              document.getElementById("corvni-questions").innerHTML = "";
                                                                                              }

                                                                                              }

                                                                                              resetButton.addEventListener("click", resetQuiz);

                                                                                              languageToggleDe.addEventListener("click", () => { currentLanguage = "de"; languageToggleDe.classList.add("active"); languageToggleFr.classList.remove("active"); resetQuiz(); });

                                                                                              languageToggleFr.addEventListener("click", () => { currentLanguage = "fr"; languageToggleFr.classList.add("active"); languageToggleDe.classList.remove("active"); resetQuiz(); });

                                                                                              lightModeButton.addEventListener("click", () => { document.body.classList.remove("dark-mode"); document.body.classList.add("light-mode"); });

                                                                                              darkModeButton.addEventListener("click", () => { document.body.classList.remove("light-mode"); document.body.classList.add("dark-mode"); });

                                                                                              resetQuiz(); });
})