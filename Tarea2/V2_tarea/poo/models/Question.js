class Question {

    constructor ( ) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer() {
        return true; 
        
    }
}
const question = new Question('¿Cuál es la montaña más alta de México?' ['Popocatépetl', 'Iztaccihuatl', 'PicodeOrizaba'], 'PicodeOrizaba')

console.log (question)