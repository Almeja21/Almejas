

//Crear una clase question
class question {
    constructor(question, options, correctAnswer, userAnswer) {
      this.question = question;
      this.options = options;
      this.correctAnswer = correctAnswer;
      this.userAnswer = userAnswer;
    }
  
    isCorrectAnswer() {
      return this.userAnswer === this.correctAnswer;
    }
  }

  //Crear la clase Quiz 
  class Quiz {
    constructor(questions) {
      this.questions = questions;
    }
  
    askQuestions() {
      this.questions.forEach((question) => {
        console.log(question.question);
        const userAnswer = question.userAnswer;
        console.log
        if (question.isCorrectAnswer()) {
          console.log("¡Correcto!");
        } else {
          console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
        
        }
      });
    }
  }
  //Crear instancias y correr el cuestionario
  const questions = [
    new question ("¿Cuál es la montaña más alta de México?", ['Popocatépetl', 'Iztaccihuatl', "PicodeOrizaba"], "PicodeOrizaba", "Popocatépetl"),
    new question ("¿Que quiere decir Popocatépetl?", ["CerroqueHumea", "CerrodelaEstrella", "MujerDormida"], "CerroqueHumea", "CerrodelaEstrella"),
    new question ("¿Donde se encuentra el volcán Sierra Negra?", ["Puebla", "Toluca", "Tlaxcala"], "Puebla", "Toluca"),
    new question ("¿Donde se encuentra Cerro de la Silla?", ["Monterrey", "Toluca", "Coahuila"], 'Monterrey', "Coahuila"),
    new question ("¿La altura de una montaña en México se mide en...?", ['Metros sobre el Nivel del Mar', 'PiesCubicos', 'KilómetrosCuadrados'], "KilómetrosCuadrados", "MetrossobreelNiveldelMar"),
    new question ("¿Cuál es la zona arqueólogica más alta del mundo?", ["ElTepozteco", "MonteTlaloc", "MachuPichu"], "MonteTlaloc", "MachuPichu"),
    new question ("¿La principal vegetación del Ajusco es de...?", ["Pinos", "Helechos", "Oyameles"],"Pinos", "Oyameles"),
    new question ("¿Cuál de estos no se encuentra en México?", ["VolcanEvermann", "CerroMohinora", "VolcandeFuego"],"CerroMohinora", "VolcandeFuego"),
];
  
  const quiz = new Quiz(questions);
  quiz.askQuestions();
  
  