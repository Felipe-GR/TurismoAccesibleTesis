import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/**
 * Esta pantalla muestra el certificado según el puntaje alcanzado. El usuario debe mostrar esto en la caja para obtener una recompensa por resolver el
 * cuestionario.
 */
export default class CertificateScreen extends React.Component {

    static navigationOptions = {
        title: "CertificateScreen", // establece un título para la barra de navegación en la parte superior y el diseño está en el
        // archivo ../navigation/StackNavigator.js
        header: null // no muestre el encabezado ya que no es útil en la pantalla del certificado
    };

    render() {
        return (
            <View style={styles.anyWholeScreen}>

                {/*Establecer el título de la pantalla*/}
                <View style={styles.certificateTitleTextContainer}>
                    <Text style={styles.certificateTitleTextFormat} numberOfLines={2}>
                        ¡Felicidades!
                    </Text>
                </View>

                {/* mostrar el certificado de acuerdo con el puntaje alcanzado */}
                {this.showParticularCertificate()}

                {/* muestra un pequeño botón de retroceso para que el usuario pueda volver a la pantalla de resultados */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')}
                                    underlayColor="rgba(96,100,109, 1)" style={styles.certificateBackButtonStyle}>
                    <IconEntypo name="arrow-long-left" size={wp("5%")} color="white"/>
                </TouchableHighlight>

            </View>
        );
    }

    /**
     * Esta función devuelve la vista del certificado correcto de acuerdo con el puntaje alcanzado.
     * Diferir entre los casos 0-3 / 4-6 / 7-9 / 10 de 10 preguntas resueltas correctamente.
     * Para cada categoría, muestre un pequeño título y subtítulo que describa el esfuerzo del usuario.
     */
    showParticularCertificate() {
        if (AnswerSheet.getNumberOfRightAnswers() >= 0 && AnswerSheet.getNumberOfRightAnswers() <= 3) {
            return (
                <View style={styles.certificateBottomContainer}>
                    <Image source={require('../assets/images/foxANDBadgerOverview.png')}
                           style={styles.certificateImageStyle}/>
                    <View style={styles.certificateBottomTitleContainer}>
                        <Text style={styles.certificateBottomTextFormat}>Verschnupft?! </Text>
                    </View>
                    <View style={styles.certificateBottomSubtitleContainer}>
                        <Text style={styles.certificateBottomSubtitleTextFormat}>
                            Probablemente no pudiste detectar todas las respuestas correctas.
                        </Text>
                    </View>
                    <View style={styles.certificateBottomCashDeskContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>
                            Muestre esto al finalizar la compra y obtendrá una pequeña sorpresa.
                        </Text>
                    </View>
                </View>
            );
        } else if (AnswerSheet.getNumberOfRightAnswers() >= 4 && AnswerSheet.getNumberOfRightAnswers() <= 6) {
            return (
                <View style={styles.certificateBottomContainer}>
                    <Image source={require('../assets/images/foxANDBadgerOverview.png')}
                           style={styles.certificateImageStyle}/>
                    <View style={styles.certificateBottomTitleContainer}>
                        <Text style={styles.certificateBottomTextFormat}>Stumpfnase </Text>
                    </View>
                    <View style={styles.certificateBottomSubtitleContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>
                            Tienes buen olfato, pero ella no pudo ayudarte a oler todas las respuestas. Sin embargo, has
                            resuelto
                            {AnswerSheet.getNumberOfRightAnswers()} correctamente 10 preguntas. ¡Bravo!
                        </Text>
                    </View>
                    <View style={styles.certificateBottomCashDeskContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>
                            Muestre esto al finalizar la compra y obtendrá una pequeña sorpresa.
                        </Text>
                    </View>
                </View>
            );
        } else if (AnswerSheet.getNumberOfRightAnswers() >= 7 && AnswerSheet.getNumberOfRightAnswers() <= 9) {
            return (
                <View style={styles.certificateBottomContainer}>
                    <Image source={require('../assets/images/foxANDBadgerOverview.png')}
                           style={styles.certificateImageStyle}/>
                    <View style={styles.certificateBottomTitleContainer}>
                        <Text style={styles.certificateBottomTextFormat}>Spürnase </Text>
                    </View>
                    <View style={styles.certificateBottomSubtitleContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>
                            Con tu nariz puedes encontrar casi todas las respuestas. Maravilloso de 10
                            Has resuelto {AnswerSheet.getNumberOfRightAnswers()} preguntas correctamente. ¡Excelente!
                        </Text>
                    </View>
                    <View style={styles.certificateBottomCashDeskContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>
                            Muestre esto al finalizar la compra y obtendrá una pequeña sorpresa.
                        </Text>
                    </View>
                </View>
            );
        } else if (AnswerSheet.getNumberOfRightAnswers() === 10) {
            return (
                <View style={styles.certificateBottomContainer}>
                    <Image source={require('../assets/images/foxANDBadgerOverview.png')}
                           style={styles.certificateImageStyle}/>
                    <View style={styles.certificateBottomTitleContainer}>
                        <Text style={styles.certificateBottomTextFormat}>
                            Super - nariz
                        </Text>
                    </View>
                    <View style={styles.certificateBottomSubtitleContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>0
                            Tienes una nariz increible ¡Genial, respondiste todas las preguntas correctamente!
                        </Text>
                    </View>
                    <View style={styles.certificateBottomCashDeskContainer}>
                        <Text style={styles.certificateBottomInfoTextFormat}>
                            Muestre esto al finalizar la compra y obtendrá una pequeña sorpresa.
                        </Text>
                    </View>

                </View>
            );
        } else {
            return (
                <View style={styles.certificateBottomContainer}>
                    <Image source={require('../assets/images/foxANDBadgerOverview.png')}
                           style={styles.certificateImageStyle}/>
                    <View style={styles.certificateBottomTitleContainer}>
                        <Text style={styles.certificateBottomTextFormat}>
                            Error: ¡Número incorrecto de respuestas correctas!
                        </Text>
                    </View>
                </View>
            );
        }
    }
}
