import React from 'react';

/**
 * Esta clase contiene todas las preguntas y todas las opciones múltiples. Además, puede obtener las preguntas y las
 * múltiples opciones con los métodos get.
 */
export class QuestionSheetClass extends React.Component {

    /**
     * Esta variable contiene todos los textos de información a las estaciones
     */
    Infos = {
        HowTo: 'El Museo Nacional de Colombia fue creado en 1823, y es uno de los más antiguos de América. Ofrece a sus visitantes diecisiete salas de ' +
            'exposición permanente, en las cuales se exhiben alrededor de 2.500 obras y objetos, símbolos de la historia y el patrimonio nacional. \n' +
            'En su calendario de exposiciones temporales, el Museo presenta muestras de historia, arte y arqueología nacionales e internacionales. ' +
            'Adicionalmente, brinda una variada programación académica y cultural que incluye conferencias, conciertos, presentaciones de teatro y danza y ' +
            'proyecciones audiovisuales, entre otros. \n\n' +
            '¡Diviértete! ',

        Station1: 'Esta pieza fue repatriada desde Francia, el 13 de noviembre de 1998, junto con 3 estatuas más que habían sido robadas de la zona arqueológica de San Agustín, al suroccidente de Colombia, aproximadamente entre los años 1994 y 1995. \n El parque arqueológico de San Agustín, nombrado patrimonio de la humanidad en 1995, es reconocido mundialmente por la monumentalidad de su estatuaria, caracterizada por representaciones humanas y de animales con infinidad de rasgos, posturas y tocados, elaboradas para acompañar los montículos funerarios donde enterraban a sus muertos. Igualmente sobresalen relieves en piedra como la fuente de lavapatas, aterrazamientos, caminos y terraplenes. \n Según resultados de las investigaciones arqueológicas, estas piezas fueron elaboradas por grupos humanos que ocuparon la región entre los siglos I a. C. y VII d. C. en un área cercana a los 500 km2. Construyeron sus viviendas sobre cimas de colinas. La agricultura fue el principal medio de subsistencia; para ello adecuaron tierras anegadizas con canales de drenaje y construyeron terrazas para el cultivo en laderas de montañas.',
        Station2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station3: 'Ofrecida al Libertador después de su entrada triunfal al Cuzco. Bolívar se la quitó de sus sienes y se la colocó a Antonio José de Sucre, juzgando que era él quien la merecía.  El Mariscal de Ayacucho, a su vez, en nombre del ejército libertador la obsequió al Congreso de Colombia y expresó: “Que aquella joya correspondía únicamente a los representantes del pueblo de Colombia, que le habían enviado al Perú para vengar los ultrajes inferidos a los antiguos hijos del Sol”. El Senado aceptó la corona y la destinó al Museo Nacional de Colombia. Cargada de enorme simbolismo patrio, la Guirnalda ha sido descrita en innumerables oportunidades como tesoro inapreciable, corona del triunfo o la victoria, y espléndida joya que refleja la más refinada orfebrería cuzqueña al combinar once técnicas: incrustado, trenzado, rehundido, alambrado, filigrana, calado, grabado, burilado, bruñido, peinado y esmaltado. Se utilizaron 47 hojas de laurel en oro; 49 perlas barrocas; 9 diamantes grandes; 274 chispas de diamantes y 10 cuentas de oro.  Tiene un peso de 763 gramos. ',
        Station4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
        Station10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lectus euismod, pretium turpis viverra, posuere magna. Nam pulvinar magna orci, sit amet tincidunt nunc ultricies at. Praesent scelerisque metus odio, nec aliquet massa rutrum dapibus. Sed sit amet tincidunt elit. Phasellus volutpat efficitur magna, eget pellentesque felis molestie et. Proin ultricies laoreet laoreet. Praesent malesuada varius quam vitae convallis. Vivamus finibus erat ut lorem ultrices, molestie rhoncus tortor tincidunt. Donec molestie ultricies nisl, eu congue sem sodales eget. Sed a gravida metus. Donec feugiat dictum dui a suscipit. Cras dapibus lectus eros, vitae convallis quam venenatis quis. Fusce id ante rutrum, feugiat metus consectetur, porta lorem. Sed non auctor erat, sit amet bibendum felis. ',
    };

    /**
     * Esta variable contiene todas las preguntas establecidas por el administrador. Se pueden modificar aquí y se ajustan automáticamente en
     * StationScreens y SubmitStationScreens
     */
    Questions = {
        Station1: '¿Cuando fue repatriada esta pieza? ',
        Station2: '¿Cuando fue repatriada esta pieza? ',
        Station3: '¿Cuanto pesa la corona de Bolivar? ',
        Station4: '¿Cuanto pesa la corona de Bolivar? ',
        Station5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur diam mauris, eu porttitor libero interdum eu. Nunc pellentesque sed. ',
        Station6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur diam mauris, eu porttitor libero interdum eu. Nunc pellentesque sed. ',
        Station7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur diam mauris, eu porttitor libero interdum eu. Nunc pellentesque sed. ',
        Station8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur diam mauris, eu porttitor libero interdum eu. Nunc pellentesque sed. ',
        Station9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur diam mauris, eu porttitor libero interdum eu. Nunc pellentesque sed. ',
        Station10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur diam mauris, eu porttitor libero interdum eu. Nunc pellentesque sed. ',
    };

    /**
     * Esta variable contiene todas las soluciones de múltiples opciones para A
     */
    AnswersA = {
        Station1: '13 de noviembre de 1998. ',
        Station2: '13 de noviembre de 1998. ',
        Station3: 'Tiene un peso de 763 gramos. ',
        Station4: 'Tiene un peso de 763 gramos. ',
        Station5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
    };

    /**
     * Esta variable contiene todas las soluciones de múltiples opciones para B
     */
    AnswersB = {
        Station1: '14 de noviembre de 1998. ',
        Station2: '14 de noviembre de 1998. ',
        Station3: 'Tiene un peso de 764 gramos. ',
        Station4: 'Tiene un peso de 764 gramos. ',
        Station5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
    };

    /**
     * Esta variable contiene todas las soluciones de múltiples opciones para C
     */
    AnswersC = {
        Station1: '20 de noviembre de 1998. ',
        Station2: '20 de noviembre de 1998. ',
        Station3: 'Tiene un peso de 766 gramos. ',
        Station4: 'Tiene un peso de 766 gramos. ',
        Station5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
    };

    /**
     * Esta variable contiene todas las soluciones de múltiples opciones para D
     */
    AnswersD = {
        Station1: '15 de noviembre de 1998. ',
        Station2: '15 de noviembre de 1998. ',
        Station3: 'Tiene un peso de 754 gramos. ',
        Station4: 'Tiene un peso de 754 gramos. ',
        Station5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
        Station10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu. ',
    };

    /**
     * Esta función está aquí para poder leer la opción múltiple de A cada vez y desde cualquier lugar de la aplicación
     * @param {stationNumber es un número entero entre 1 y el número de estaciones en el cuestionario} StationNumber
     */
    getAnswerA(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.AnswersA.Station1;
            case 2:
                return this.AnswersA.Station2;
            case 3:
                return this.AnswersA.Station3;
            case 4:
                return this.AnswersA.Station4;
            case 5:
                return this.AnswersA.Station5;
            case 6:
                return this.AnswersA.Station6;
            case 7:
                return this.AnswersA.Station7;
            case 8:
                return this.AnswersA.Station8;
            case 9:
                return this.AnswersA.Station9;
            case 10:
                return this.AnswersA.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Esta función está aquí para poder leer la opción múltiple de B cada vez y desde cualquier lugar de la aplicación
     * @param {stationNumber es un número entero entre 1 y el número de estaciones en el cuestionario} StationNumber
     */
    getAnswerB(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.AnswersB.Station1;
            case 2:
                return this.AnswersB.Station2;
            case 3:
                return this.AnswersB.Station3;
            case 4:
                return this.AnswersB.Station4;
            case 5:
                return this.AnswersB.Station5;
            case 6:
                return this.AnswersB.Station6;
            case 7:
                return this.AnswersB.Station7;
            case 8:
                return this.AnswersB.Station8;
            case 9:
                return this.AnswersB.Station9;
            case 10:
                return this.AnswersB.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Esta función está aquí para poder leer la opción múltiple de C cada vez y desde cualquier lugar de la aplicación
     * @param {stationNumber es un número entero entre 1 y el número de estaciones en el cuestionario} StationNumber
     */
    getAnswerC(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.AnswersC.Station1;
            case 2:
                return this.AnswersC.Station2;
            case 3:
                return this.AnswersC.Station3;
            case 4:
                return this.AnswersC.Station4;
            case 5:
                return this.AnswersC.Station5;
            case 6:
                return this.AnswersC.Station6;
            case 7:
                return this.AnswersC.Station7;
            case 8:
                return this.AnswersC.Station8;
            case 9:
                return this.AnswersC.Station9;
            case 10:
                return this.AnswersC.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Esta función está aquí para poder leer la opción múltiple de D cada vez y desde cualquier lugar de la aplicación
     * @param {stationNumber es un número entero entre 1 y el número de estaciones en el cuestionario} StationNumber
     */
    getAnswerD(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.AnswersD.Station1;
            case 2:
                return this.AnswersD.Station2;
            case 3:
                return this.AnswersD.Station3;
            case 4:
                return this.AnswersD.Station4;
            case 5:
                return this.AnswersD.Station5;
            case 6:
                return this.AnswersD.Station6;
            case 7:
                return this.AnswersD.Station7;
            case 8:
                return this.AnswersD.Station8;
            case 9:
                return this.AnswersD.Station9;
            case 10:
                return this.AnswersD.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Esta función está aquí para poder leer las preguntas cada vez y desde cualquier lugar de la aplicación
     * @param {stationNumber es un número entero entre 1 y el número de estaciones en el cuestionario} StationNumber
     */
    getQuestion(StationNumber) {
        switch (StationNumber) {
            case 1:
                return this.Questions.Station1;
            case 2:
                return this.Questions.Station2;
            case 3:
                return this.Questions.Station3;
            case 4:
                return this.Questions.Station4;
            case 5:
                return this.Questions.Station5;
            case 6:
                return this.Questions.Station6;
            case 7:
                return this.Questions.Station7;
            case 8:
                return this.Questions.Station8;
            case 9:
                return this.Questions.Station9;
            case 10:
                return this.Questions.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };

    /**
     * Esta función está aquí para poder leer los textos de información en todo momento y desde cualquier lugar de la aplicación
     * @param {stationNumber es un número entero entre 1 y el número de estaciones en el cuestionario} StationNumber
     */
    getInfo(StationNumber) {
        switch (StationNumber) {
            case 0:
                return this.Infos.HowTo;
            case 1:
                return this.Infos.Station1;
            case 2:
                return this.Infos.Station2;
            case 3:
                return this.Infos.Station3;
            case 4:
                return this.Infos.Station4;
            case 5:
                return this.Infos.Station5;
            case 6:
                return this.Infos.Station6;
            case 7:
                return this.Infos.Station7;
            case 8:
                return this.Infos.Station8;
            case 9:
                return this.Infos.Station9;
            case 10:
                return this.Infos.Station10;
            default:
                return '¡Este número de estación no existe!'
        }
    };
}

/**
 * Haga una instancia de esta clase de modo que podamos exportarla para un acceso más fácil desde todas las pantallas sin crear siempre una
 * instancia para obtener acceso a los métodos y valores
 */
const QuestionSheet = new QuestionSheetClass();

// exportar esta instancia para reutilizar los métodos de otras clases y archivos
export default QuestionSheet;
