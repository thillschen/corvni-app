"use strict";

/* STATE */
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
                
                /* UI */
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
                                    confirm: document.getElementById("confirm"),
                                      next: document.getElementById("next"),
                                        prev: document.getElementById("prev"),
                                          reset: document.getElementById("reset")
                                          };
                                          
                                          /* INIT */
                                          init();
                                          
                                          function init() {
                                            bindEvents();
                                              startQuiz();
                                              }
                                              
                                              function bindEvents() {
                                                ui.confirm.onclick = confirmAnswer;
                                                  ui.next.onclick = nextQuestion;
                                                    ui.prev.onclick = prevQuestion;
                                                      ui.reset.onclick = startQuiz;
                                                      
                                                        ui.quizType.onchange = startQuiz;
                                                          ui.questionCount.onchange = startQuiz;
                                                            ui.orderMode.onclick = toggleOrderMode;
                                                              ui.examMode.onclick = toggleExamMode;
                                                                ui.toggleTheme.onclick = toggleTheme;
                                                                }
                                                                
                                                                /* QUIZ */
                                                                function startQuiz() {
                                                                  const type = ui.quizType.value;
                                                                    const countValue = ui.questionCount.value;
                                                                    
                                                                      state.allQuestions =
                                                                          type === "corvni" ? [...corvniQuestions] : [...srcQuestions];
                                                                          
                                                                            const count =
                                                                                countValue === "all"
                                                                                      ? state.allQuestions.length
                                                                                            : Number(countValue);
                                                                                            
                                                                                              state.questions = state.orderedMode
                                                                                                  ? state.allQuestions.slice(0, count)
                                                                                                      : shuffle([...state.allQuestions]).slice(0, count);
                                                                                                      
                                                                                                        state.index = 0;
                                                                                                          state.score = 0;
                                                                                                            renderQuestion();
                                                                                                            }
                                                                                                            
                                                                                                            function renderQuestion() {
                                                                                                              const q = state.questions[state.index];
                                                                                                              
                                                                                                                state.selected = null;
                                                                                                                  state.confirmed = false;
                                                                                                                    ui.answers.innerHTML = "";
                                                                                                                    
                                                                                                                      ui.question.textContent = q.question.de;
                                                                                                                        updateProgress();
                                                                                                                        
                                                                                                                          const answers = shuffle([...q.answers]);
                                                                                                                            q._answers = answers;
                                                                                                                            
                                                                                                                              answers.forEach((a, i) => {
                                                                                                                                  const btn = document.createElement("button");
                                                                                                                                      btn.textContent = a.text.de;
                                                                                                                                          btn.onclick = () => selectAnswer(btn, i);
                                                                                                                                              ui.answers.appendChild(btn);
                                                                                                                                                });
                                                                                                                                                }
                                                                                                                                                
                                                                                                                                                function selectAnswer(btn, i) {
                                                                                                                                                  if (state.confirmed) return;
                                                                                                                                                    [...ui.answers.children].forEach(b => b.classList.remove("selected"));
                                                                                                                                                      btn.classList.add("selected");
                                                                                                                                                        state.selected = i;
                                                                                                                                                        }
                                                                                                                                                        
                                                                                                                                                        function confirmAnswer() {
                                                                                                                                                          if (state.selected === null || state.confirmed) return;
                                                                                                                                                            state.confirmed = true;
                                                                                                                                                            
                                                                                                                                                              const answers = state.questions[state.index]._answers;
                                                                                                                                                                [...ui.answers.children].forEach((b, i) => {
                                                                                                                                                                    if (answers[i].correct) b.classList.add("correct");
                                                                                                                                                                        if (i === state.selected && !answers[i].correct) b.classList.add("wrong");
                                                                                                                                                                          });
                                                                                                                                                                          
                                                                                                                                                                            if (answers[state.selected].correct) state.score++;
                                                                                                                                                                            }
                                                                                                                                                                            
                                                                                                                                                                            function nextQuestion() {
                                                                                                                                                                              if (!state.confirmed) return;
                                                                                                                                                                                state.index++;
                                                                                                                                                                                  state.index >= state.questions.length ? showResult() : renderQuestion();
                                                                                                                                                                                  }
                                                                                                                                                                                  
                                                                                                                                                                                  function prevQuestion() {
                                                                                                                                                                                    if (state.examMode || state.index === 0) return;
                                                                                                                                                                                      state.index--;
                                                                                                                                                                                        renderQuestion();
                                                                                                                                                                                        }
                                                                                                                                                                                        
                                                                                                                                                                                        function showResult() {
                                                                                                                                                                                          const percent = Math.round((state.score / state.questions.length) * 100);
                                                                                                                                                                                            const passed = percent >= 50;
                                                                                                                                                                                            
                                                                                                                                                                                              ui.question.innerHTML = `
                                                                                                                                                                                                  Ergebnis: ${state.score}/${state.questions.length} (${percent}%)<br>
                                                                                                                                                                                                      ${state.examMode ? `<strong>${passed ? "BESTANDEN ✅" : "NICHT BESTANDEN ❌"}</strong>` : ""}
                                                                                                                                                                                                        `;
                                                                                                                                                                                                        
                                                                                                                                                                                                          ui.answers.innerHTML = "";
                                                                                                                                                                                                            ui.progressText.textContent = "Fertig";
                                                                                                                                                                                                              ui.progressFill.style.width = "100%";
                                                                                                                                                                                                              }
                                                                                                                                                                                                              
                                                                                                                                                                                                              /* HELPERS */
                                                                                                                                                                                                              function updateProgress() {
                                                                                                                                                                                                                ui.progressText.textContent =
                                                                                                                                                                                                                    `Frage ${state.index + 1} / ${state.questions.length}`;
                                                                                                                                                                                                                      ui.progressFill.style.width =
                                                                                                                                                                                                                          `${(state.index / state.questions.length) * 100}%`;
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          function toggleOrderMode() {
                                                                                                                                                                                                                            state.orderedMode = !state.orderedMode;
                                                                                                                                                                                                                              ui.orderMode.textContent = state.orderedMode ? "ZUFALL" : "REIHENFOLGE";
                                                                                                                                                                                                                                startQuiz();
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                function toggleExamMode() {
                                                                                                                                                                                                                                  state.examMode = !state.examMode;
                                                                                                                                                                                                                                    ui.examMode.textContent = state.examMode ? "TRAINING" : "PRÜFUNG";
                                                                                                                                                                                                                                      startQuiz();
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                      function toggleTheme() {
                                                                                                                                                                                                                                        const body = document.body;
                                                                                                                                                                                                                                          const dark = !body.classList.toggle("light");
                                                                                                                                                                                                                                            body.classList.toggle("dark", dark);
                                                                                                                                                                                                                                              ui.toggleTheme.textContent = dark ? "LIGHT" : "DARK";
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                              function shuffle(arr) {
                                                                                                                                                                                                                                                for (let i = arr.length - 1; i > 0; i--) {
                                                                                                                                                                                                                                                    const j = Math.floor(Math.random() * (i + 1));
                                                                                                                                                                                                                                                        [arr[i], arr[j]] = [arr[j], arr[i]];
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                            return arr;
                                                                                                                                                                                                                                                            }"