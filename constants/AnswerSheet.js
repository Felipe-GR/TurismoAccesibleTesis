/**
 * Esta clase lleva todas las respuestas que el usuario ha dado.
 * Además, puede obtener y establecer las respuestas con el conjunto y obtener métodos.
 */
class AnswerSheetClass {

    /**
     * Esta variable contiene todas las respuestas dadas por el usuario.
     * Se pueden modificar con el método setAnswer() y se pueden leer con el método getAnswer()
     */
    Answers = {
        Station1: '',
        Station2: '',
        Station3: '',
        Station4: '',
        Station5: '',
        Station6: '',
        Station7: '',
        Station8: '',
        Station9: '',
        Station10: '',
    };

    /**
     * Esta variable contiene todas las soluciones a los cuestionarios para poder hacer una pantalla de resultados.
     */
    RightAnswers = {
        Station1: 'A',
        Station2: 'A',
        Station3: 'A',
        Station4: 'A',
        Station5: 'B',
        Station6: 'D',
        Station7: 'A',
        Station8: 'B',
        Station9: 'D',
        Station10: 'C',
    };

    /**
     * Este método está aquí para poder leer la respuesta en todo momento y desde cualquier lugar de la aplicación.
     */
    getAnswer(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.Answers.Station1;
            case 2:
                return this.Answers.Station2;
            case 3:
                return this.Answers.Station3;
            case 4:
                return this.Answers.Station4;
            case 5:
                return this.Answers.Station5;
            case 6:
                return this.Answers.Station6;
            case 7:
                return this.Answers.Station7;
            case 8:
                return this.Answers.Station8;
            case 9:
                return this.Answers.Station9;
            case 10:
                return this.Answers.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Este método está aquí para poder configurar las respuestas cada vez y desde cualquier lugar de la aplicación.
     */
    setAnswer(StationNumber, Answer) {
        switch (StationNumber) {
            case 1:
                this.Answers.Station1 = Answer;
                break;
            case 2:
                this.Answers.Station2 = Answer;
                break;
            case 3:
                this.Answers.Station3 = Answer;
                break;
            case 4:
                this.Answers.Station4 = Answer;
                break;
            case 5:
                this.Answers.Station5 = Answer;
                break;
            case 6:
                this.Answers.Station6 = Answer;
                break;
            case 7:
                this.Answers.Station7 = Answer;
                break;
            case 8:
                this.Answers.Station8 = Answer;
                break;
            case 9:
                this.Answers.Station9 = Answer;
                break;
            case 10:
                this.Answers.Station10 = Answer;
                break;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Este método está aquí para poder leer la respuesta correcta en todo momento y desde cualquier lugar de la aplicación
     */
    getRightAnswer(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.RightAnswers.Station1;
            case 2:
                return this.RightAnswers.Station2;
            case 3:
                return this.RightAnswers.Station3;
            case 4:
                return this.RightAnswers.Station4;
            case 5:
                return this.RightAnswers.Station5;
            case 6:
                return this.RightAnswers.Station6;
            case 7:
                return this.RightAnswers.Station7;
            case 8:
                return this.RightAnswers.Station8;
            case 9:
                return this.RightAnswers.Station9;
            case 10:
                return this.RightAnswers.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Esta variable está aquí para guardar la cantidad de respuestas correctas dadas por el usuario
     */
    numberOfRightAnswers = 0;

    /**
     * Establece el método para la variable 'numberOfRightAnswers'
     * @param {Es el número de respuestas correctas dadas por el usuario}
     */
    setNumberOfRightAnswers(right) {
        this.numberOfRightAnswers = right;
    };

    /**
     * Método get para la variable 'numberOfRightAnswers'
     */
    getNumberOfRightAnswers() {
        return this.numberOfRightAnswers;
    };
}

/**
 * Haga una instancia de esta clase de modo que podamos exportarla para un acceso más fácil desde todas las pantallas sin crear siempre una instancia
 * para obtener acceso a los métodos y valores
 */
const AnswerSheet = new AnswerSheetClass();

// Exportar esta instancia para reutilizar los métodos de otras clases y archivos
export default AnswerSheet;
