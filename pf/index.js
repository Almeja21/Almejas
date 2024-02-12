// Paso 1: Definir la estructura de datos para las preguntas y las respuestas
const questions = [
    {
      question: "¿Cual es la montaña más alta de México?",
      options: ["Popocatépetl", "Iztaccihuatl", "PicodeOrizaba"],
      correctAnswer: "Picodeorizaba",
      userAnswer: "Picodeorizaba" // Respuesta correcta
    },
    {
      question: "¿Cual es la montaña más alta de México?",
      options: ["Popocatépetl", "Iztaccihuatl", "PicodeOrizaba"],
      correctAnswer:"PicodeOrizaba",
      userAnswer: "Popocatépetl" // Respuesta incorrecta
    },
    {
      question: "¿Cual es la montaña más alta de México?",
      options: ["Popocatépetl", "Iztaccihuatl", "PicodeOrizaba"],
      correctAnswer:"PicodeOrizaba",
      userAnswer: "Iztaccihuatl" // Respuesta incorrecta
    },
    {
      question: "¿Que quiere decir Popocatépetl?",
      options: ["CerrodelaEstrella", "CerroqueHumea", "MujerDormida"],
      correctAnswer: "CerroqueHumea",
      userAnswer: "CerroqueHumea" // Respuesta correcta
    },
    { 
      question: "¿Que quiere decir Popocatépetl?",
      options: ["CerrodelaEstrella", "CerroqueHumea", "MujerDormida"],
      correctAnswer: "CerroqueHumea",
      userAnswer: "MilánCerrodelaEstrella" // Respuesta incorrecta
    },  
    {
      question: "¿Que quiere decir Popocatépetl?",
      options: ["CerrodelaEstrella", "CerroqueHumea", "MujerDormida"],
      correctAnswer: "CerroqueHumea",
      userAnswer: "MujerDormida" // Respuesta incorrecta
    },
    {
      question: "¿Donde se encuentra el volcán Sierra Negra?",
      options: ["Toluca", "Puebla", "EstadodeMexico"],
      correctAnswer: "Puebla",
      userAnswer: "Puebla" // Respuesta correcta
    },
    {
      question: "¿Donde se encuentra el volcán Sierra Negra?",
      options: ["Toluca", "Puebla", "EstadodeMexico"],
      correctAnswer: "Puebla",
      userAnswer: "Toluca" // Respuesta incorrecta
    },
    {
        question: "¿Donde se encuentra el volcán Sierra Negra?",
        options: ["Toluca", "Puebla", "EstadodeMexico"],
        correctAnswer: "Puebla",
        userAnswer: "EstadodeMexico" // Respuesta incorrecta
    },
    {
      question: "¿Donde se encuentra Cerro de la Silla?",
      options: ["Toluca", "Monterrey", "Coahuila"],
      correctAnswer: "Monterrey",
      userAnswer: "Monterrey" // Respuesta correcta
    },
    {
      question: "¿Donde se encuentra Cerro de la Silla?",
      options: ["Toluca", "Monterrey", "Coahuila"],
      correctAnswer: "Monterrey",
      userAnswer: "Coahuila" // Respuesta incorrecta
    },
    {
      question: "¿Donde se encuentra Cerro de la Silla?",
      options: ["Toluca", "Monterrey", "Coahuila"],
      correctAnswer: "Monterrey",
      userAnswer: "Toluca" // Respuesta incorrecta
    },
    {
      question: "¿La altura de una montaña en México se mide en...?",
      options: ["PiesCubicos", "KilómetrosCuadrados", "MetrossobreelNiveldelMar"],
      correctAnswer: "MetrossobreelNiveldelMar",
      userAnswer: "MetrossobreelNiveldelMar" // Respuesta correcta
    },
    {
      question: "¿La altura de una montaña en México se mide en...?",
      options: ["PiesCubicos", "KilómetrosCuadrados", "MetrossobreelNiveldelMar"],
      correctAnswer: "MetrossobreelNiveldelMar",
      userAnswer: "KilómetrosCuadrados" // Respuesta incorrecta
    },
    {
      question: "¿La altura de una montaña en México se mide en...?",
      options: ["PiesCubicos", "KilómetrosCuadrados", "MetrossobreelNiveldelMar"],
      correctAnswer: "MetrossobreelNiveldelMar",
      userAnswer: "PiesCubicos" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la zona arqueólogica más alta del mundo?",
      options: ["ElTepozteco", "MonteTlaloc", "MachuPichu"],
      correctAnswer: "MonteTlaloc",
      userAnswer: "MonteTlaloc" // Respuesta correcta
    },
    {
      question: "¿Cuál es la zona arqueólogica más alta del mundo?",
      options: ["ElTepozteco", "MonteTlaloc", "MachuPichu"],
      correctAnswer: "MonteTlaloc",
      userAnswer: "ElTepozteco" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la zona arqueólogica más alta del mundo?",
      options: ["ElTepozteco", "MonteTlaloc", "MachuPichu"],
      correctAnswer: "MonteTlaloc",
      userAnswer: "MachuPichu" // Respuesta incorrecta
    },
    {
      question: "¿La principal vegetación del Ajusco es de...?",
      options: ["Pinos", "Helechos", "Oyameles"],
      correctAnswer: "Pinos",
      userAnswer: "Pinos" // Respuesta correcta
    },
    {
      question: "¿La principal vegetación del Ajusco es de...?",
      options: ["Pinos", "Helechos", "Oyameles"],
      correctAnswer: "Pinos",
      userAnswer: "Helechos" // Respuesta incorrecta
    },
    {
      question: "¿La principal vegetación del Ajusco es de...?",
      options: ["Pinos", "Helechos", "Oyameles"],
      correctAnswer: "Pinos",
      userAnswer: "Oyameles" // Respuesta incorrecta
    },
    {
      question: "¿Cuál de estos no se encuentra en México?",
      options: ["VolcanEvermann", "CerroMohinora", "VolcandeFuego"],
      correctAnswer: "VolcandeFuego",
      userAnswer: "VolcandeFuego" // Respuesta correcta
    },
    {
      question: "¿Cuál de estos no se encuentra en México?",
      options: ["VolcanEvermann", "CerroMohinora", "VolcandeFuego"],
      correctAnswer: "VolcandeFuego",
      userAnswer: "VolcanEvermann" // Respuesta incorrecta
    },
    {
      question: "¿Cuál de estos no se encuentra en México?",
      options: ["VolcanEvermann", "CerroMohinora", "VolcandeFuego"],
      correctAnswer: "VolcandeFuego",
      userAnswer: "CerroMohinora" // Respuesta incorrecta
    },
    
  ];
  
  
  // Paso 2: Crear la función isCorrectAnswer
  function isCorrectAnswer(question, answer) {
    return answer === question.correctAnswer;
  }

  
  
  // Paso 3: Definir la función getUserAnswer
  function getUserAnswer(question) {
    // Esta función devuelve la respuesta proporcionada por el usuario
    return question.userAnswer;
    const questions = [
        new question("¿Cual es la montaña más alta de México?", ["Popocatépetl", "Iztaccihuatl", "Picodeorizaba"], "PicodeOrizaba", "Popocatépetl" ),
        new question("¿Que quiere decir Popocatépetl?", ["CerrodelaEstrella", "CerroqueHumea", "MujerDormida"], "CerroqueHumea", "MujerDormida"),
        new question("¿Donde se encuentra el volcán Sierra Negra?", ["Toluca", "Puebla", "EstadodeMexico"], "Puebla", "Toluca"),
      ];
      
      const quiz = new Quiz(questions);
      quiz.askQuestions();
      

  
  // Paso 4: Crear la función askQuestion
  function askQuestion(question) {
    console.log(question.question);
    const userAnswer = getUserAnswer(question); 
    if (isCorrectAnswer(question, userAnswer)) {
      console.log("¡Correcto!");
    } else {
      console.log("Incorrecto. La respuesta correcta es" + question.correctAnswer);
    }
  }
  
  // Paso 5: Utilizar la función askQuestion para cada pregunta
  questions.forEach((question) => {
    askQuestion(question);
  })