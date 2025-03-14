// Вопросы и варианты ответов
const questions = [
  {
    question: "Какие небесные тела входят в состав Солнечной системы?",
    image: "1.png",
    answers: ["Планеты", "Астероиды", "Спутники", "Черные дыры"],
    correctAnswer: ["Планеты", "Астероиды", "Спутники"] // Правильные ответы могут быть множественными
  },
  {
    question: "Сколько планет в Солнечной системе?",
    image: "2.png",
    answers: ["7", "9", "8", "10"],
    correctAnswer: "8"
},
  {
    question: "Какая планета известна как 'Красная планета'?",
    image: "3.png",
    answers: ["Венера", "Юпитер", "Марс", "Сатурн"],
    correctAnswer: "Марс"
},
{
    question: "Как называется галактика, в которой находится Земля?",
    image: "4.png",
    answers: ["Туманность Андромеды", "Большое Магелланово Облако", "Млечный Путь", "Треугольник"],
    correctAnswer: "Млечный Путь"
},
{
    question: "Какая планета самая большая в Солнечной системе?",
    image: "5.png",
    answers: ["Земля", "Сатурн", "Юпитер", "Уран"],
    correctAnswer: "Юпитер"
},
 {
    question: "Какой космический аппарат первым высадил людей на Луну?",
    image: "6.png",
    answers: ["Восток-1", "Союз-1", "Аполлон-11", "Вояджер-1"],
    correctAnswer: "Аполлон-11"
},
  {
    question: "Какая планета вращается вокруг своей оси 'лежа на боку'?",
    image: "7.png",
    answers: ["Меркурий", "Нептун", "Уран", "Венера"],
    correctAnswer: "Уран"
},
  {
    question: "Как называется самая яркая звезда на ночном небе?",
    image: "8.png",
    answers: ["Полярная звезда", "Арктур", "Сириус", "Бетельгейзе"],
    correctAnswer: "Сириус"
},
{
    question: "Что такое астероид?",
    image: "9.png",
    answers: ["Маленькая звезда", "Газовый шар", "Каменный объект в космосе", "Тип кометы"],
    correctAnswer: "Каменный объект в космосе"
},
 {
    question: "Какая планета имеет кольца?",
    image: "10.png",
    answers: ["Марс", "Венера", "Сатурн", "Меркурий"],
    correctAnswer: "Сатурн"
},
{
    question: "Как называется точка на орбите, где планета находится ближе всего к Солнцу?",
    image: "11.png",
    answers: ["Апогей", "Перигей", "Перигелий", "Афелий"],
    correctAnswer: "Перигелий"
},
{
    question: "Какая планета самая горячая в Солнечной системе?",
    image: "12.png",
    answers: ["Меркурий", "Земля", "Венера", "Марс"],
    correctAnswer: "Венера"
},
{
    question: "Как называется явление, когда Луна полностью закрывает Солнце?",
    image: "13.png",
    answers: ["Полная Луна", "Лунное затмение", "Солнечное затмение", "Звездопад"],
    correctAnswer: "Солнечное затмение"
},
{
    question: "Какой спутник у Юпитера самый крупный?",
    image: "14.png",
    answers: ["Европа", "Ио", "Ганимед", "Каллисто"],
    correctAnswer: "Ганимед"
},
{
    question: "Какая планета имеет самую короткую годовую орбиту?",
    image: "15.png",
    answers: ["Земля", "Венера", "Меркурий", "Марс"],
    correctAnswer: "Меркурий"
},
{
    question: "Как называется группа звезд, образующих определенный узор на небе?",
    image: "16.png",
    answers: ["Галактика", "Туманность", "Созвездие", "Кластер"],
    correctAnswer: "Созвездие"
}
 ];

let currentQuestionIndex = 0;
let correctAnswersCount = 0; // Счетчик правильных выборов
let totalAnswers = questions.reduce((sum, q) => sum + q.correctAnswer.length, 0); // Общее количество правильных ответов

// Функция для запуска викторины
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

// Функция для отображения вопроса
function showQuestion() {
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const questionImage = document.getElementById("question-image");

  questionText.textContent = questions[currentQuestionIndex].question;
  questionImage.src = questions[currentQuestionIndex].image;

  answerButtons.innerHTML = "";
  questions[currentQuestionIndex].answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => toggleSelection(button));
    answerButtons.appendChild(button);
  });

  resetSelectedAnswers();
}

// Функция для переключения выбора ответа
function toggleSelection(button) {
  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    button.style.backgroundColor = ""; // Возвращаем исходный цвет
    button.style.color = ""; // Возвращаем исходный текст
  } else {
    button.classList.add("selected");
    button.style.backgroundColor = "#18015c"; // Темно-зеленый
    button.style.color = "white"; // Белый текст
  }
}

// Функция для сброса выбранных ответов
function resetSelectedAnswers() {
  document.querySelectorAll(".answer-btn").forEach(button => {
    button.classList.remove("selected");
    button.style.backgroundColor = ""; // Возвращаем исходный цвет
    button.style.color = ""; // Возвращаем исходный текст
  });
}

// Функция для перехода к следующему вопросу
function nextQuestion() {
  // Получаем выбранные ответы
  const selectedAnswers = Array.from(
    document.querySelectorAll(".answer-btn.selected")
  ).map(button => button.textContent);

  // Получаем правильные ответы для текущего вопроса
  const correctAnswers = questions[currentQuestionIndex].correctAnswer;

  // Проверяем правильность каждого выбранного ответа
  selectedAnswers.forEach(answer => {
    if (correctAnswers.includes(answer)) {
      correctAnswersCount++; // Увеличиваем счетчик правильных выборов
    }
  });

  // Сбрасываем выбранные ответы перед показом нового вопроса
  resetSelectedAnswers();

  // Переходим к следующему вопросу или показываем результаты
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Функция для показа результатов
function showResults() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  // Рассчитываем процент правильных ответов
  const scorePercentage = Math.round((correctAnswersCount / totalAnswers) * 743);
  const scoreText = document.getElementById("score-text");
  scoreText.textContent = scorePercentage; // Отображаем процент
}

// Функция для перезапуска викторины
function restartQuiz() {
  currentQuestionIndex = 0;
  correctAnswersCount = 0; // Сбрасываем счетчик правильных выборов
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

// Инициализация кнопок
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("restart-button").addEventListener("click", restartQuiz);