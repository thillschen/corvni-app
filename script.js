/*
import { corvniQuestions } from './corvniQuestions.js';
import { srcQuestions } from './srcQuestions.js';
*/

document.addEventListener("DOMContentLoaded", function () {
  const resetButton = document.getElementById("reset");
  const languageToggleDe = document.getElementById("toggle-language-de");
  const languageToggleFr = document.getElementById("toggle-language-fr");
  const lightModeButton = document.getElementById("toggle-light");
  const darkModeButton = document.getElementById("toggle-dark");
  let currentLanguage = "de";
  let currentMode = "dark";

  function loadQuestions(questions, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear container

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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleAnswerClick(checkbox, answer, questionObj, optionsList) {
    // Deaktiviert alle Checkboxen für die aktuelle Frage
    optionsList.querySelectorAll(".option-checkbox").forEach(cb => cb.disabled = true);

    // Überprüft die Antwort und färbt die Auswahl entsprechend
    if (answer.correct) {
      checkbox.parentElement.querySelector("label").classList.add("correct");
    } else {
      checkbox.parentElement.querySelector("label").classList.add("incorrect");
      // Hebt die richtige Antwort hervor
      optionsList.querySelectorAll("label").forEach((label, i) => {
        if (questionObj.answers[i].correct) {
          label.classList.add("correct");
        }
      });
    }
  }

  resetButton.addEventListener("click", () => {
    // Entferne die Auswahl von allen Checkboxen
    const checkboxes = document.querySelectorAll(".option-checkbox");
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
      checkbox.disabled = false; // Aktiviert die Checkboxen wieder
    });

    // Entferne Markierungen für korrekte und falsche Antworten
    const labels = document.querySelectorAll(".options label");
    labels.forEach(label => {
      label.classList.remove("correct", "incorrect");
    });

    // console.log("Alle Fragen wurden zurückgesetzt!");

    // Lade die Fragen neu
    loadQuestions(srcQuestions, "src-questions");
    loadQuestions(corvniQuestions, "corvni-questions");

    // console.log("Alle Fragen wurden zurückgesetzt und neu gemischt!");
  });

  languageToggleDe.addEventListener("click", () => {
    currentLanguage = "de";
    languageToggleDe.classList.add("active");
    languageToggleFr.classList.remove("active");
    loadQuestions(srcQuestions, "src-questions");
    loadQuestions(corvniQuestions, "corvni-questions");
  });

  languageToggleFr.addEventListener("click", () => {
    currentLanguage = "fr";
    languageToggleFr.classList.add("active");
    languageToggleDe.classList.remove("active");
    loadQuestions(srcQuestions, "src-questions");
    loadQuestions(corvniQuestions, "corvni-questions");
  });

  lightModeButton.addEventListener("click", () => {
    currentMode = "light";
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    lightModeButton.classList.add("active");
    darkModeButton.classList.remove("active");
  });

  darkModeButton.addEventListener("click", () => {
    currentMode = "dark";
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    darkModeButton.classList.add("active");
    lightModeButton.classList.remove("active");
  });

  loadQuestions(srcQuestions, "src-questions");
  loadQuestions(corvniQuestions, "corvni-questions");
});
