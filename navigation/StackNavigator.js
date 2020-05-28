import {View, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// importe el StackNavigator para poder cambiar entre pantallas colocando las pantallas en la pila y, si regresa, la última pantalla aparece de la pila
import {createStackNavigator} from 'react-navigation';

// para la barra de navegación: aquí puede encontrar el directorio completo de los íconos https://oblador.github.io/react-native-vector-icons/
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// importar todas las pantallas de la aplicación
import HomeScreen from '../screens/HomeScreen';
import HowToScreen from '../screens/HowToScreen';
import MapScreen from '../screens/MapScreen';
import Station1Screen from '../screens/Station1Screen';
import Station2Screen from '../screens/Station2Screen';
import Station3Screen from '../screens/Station3Screen';
import Station4Screen from '../screens/Station4Screen';
import Station5Screen from '../screens/Station5Screen';
import Station6Screen from '../screens/Station6Screen';
import Station7Screen from '../screens/Station7Screen';
import Station8Screen from '../screens/Station8Screen';
import Station9Screen from '../screens/Station9Screen';
import Station10Screen from '../screens/Station10Screen';
import Station1QuestionScreen from '../screens/Station1Question';
import Station2QuestionScreen from '../screens/Station2Question';
import Station3QuestionScreen from '../screens/Station3Question';
import Station4QuestionScreen from '../screens/Station4Question';
import Station5QuestionScreen from '../screens/Station5Question';
import Station6QuestionScreen from '../screens/Station6Question';
import Station7QuestionScreen from '../screens/Station7Question';
import Station8QuestionScreen from '../screens/Station8Question';
import Station9QuestionScreen from '../screens/Station9Question';
import Station10QuestionScreen from '../screens/Station10Question';
import ResultScreen from '../screens/ResultScreen';
import CertificateScreen from '../screens/CertificateScreen';
import OverviewScreen from '../screens/OverviewScreen';
import SubmittedStation1Screen from '../screens/SubmittedStation1Screen';
import SubmittedStation2Screen from '../screens/SubmittedStation2Screen';
import SubmittedStation3Screen from '../screens/SubmittedStation3Screen';
import SubmittedStation4Screen from '../screens/SubmittedStation4Screen';
import SubmittedStation5Screen from '../screens/SubmittedStation5Screen';
import SubmittedStation6Screen from '../screens/SubmittedStation6Screen';
import SubmittedStation7Screen from '../screens/SubmittedStation7Screen';
import SubmittedStation8Screen from '../screens/SubmittedStation8Screen';
import SubmittedStation9Screen from '../screens/SubmittedStation9Screen';
import SubmittedStation10Screen from '../screens/SubmittedStation10Screen';

/**
 * Aquí creamos el StackNavigator.
 * Cada pantalla a la que queremos navegar debe estar en esta definición, de lo contrario, la pantalla no es accesible.
 * ¡Además definimos la barra de navegación predeterminada en la parte superior de la pantalla!
 */
const NavigationStack = createStackNavigator(
    // la convención es que navegamos a las pantallas, pero los nombres de las pantallas no tienen el sufijo 'screen'. por ejemplo, queremos navegar a la
    // pantalla de inicio que escribimos: this.props.navigation.navigate('Home')
    {
        Home: HomeScreen,
        HowTo: HowToScreen,
        Map: MapScreen,
        Overview: OverviewScreen,
        Station1: Station1Screen,
        Station2: Station2Screen,
        Station3: Station3Screen,
        Station4: Station4Screen,
        Station5: Station5Screen,
        Station6: Station6Screen,
        Station7: Station7Screen,
        Station8: Station8Screen,
        Station9: Station9Screen,
        Station10: Station10Screen,
        Station1Question: Station1QuestionScreen,
        Station2Question: Station2QuestionScreen,
        Station3Question: Station3QuestionScreen,
        Station4Question: Station4QuestionScreen,
        Station5Question: Station5QuestionScreen,
        Station6Question: Station6QuestionScreen,
        Station7Question: Station7QuestionScreen,
        Station8Question: Station8QuestionScreen,
        Station9Question: Station9QuestionScreen,
        Station10Question: Station10QuestionScreen,
        Result: ResultScreen,
        Certificate: CertificateScreen,
        SubmittedStation1: SubmittedStation1Screen,
        SubmittedStation2: SubmittedStation2Screen,
        SubmittedStation3: SubmittedStation3Screen,
        SubmittedStation4: SubmittedStation4Screen,
        SubmittedStation5: SubmittedStation5Screen,
        SubmittedStation6: SubmittedStation6Screen,
        SubmittedStation7: SubmittedStation7Screen,
        SubmittedStation8: SubmittedStation8Screen,
        SubmittedStation9: SubmittedStation9Screen,
        SubmittedStation10: SubmittedStation10Screen,
    },
    {
        // Definir en qué pantalla debe comenzar la aplicación
        initialRouteName: 'Home',
        // Aquí podemos diseñar la barra de pestañas de navegación en la parte superior para todas las pantallas.
        // Sin embargo, lo sobrescribiríamos en los archivos de pantalla si queremos.
        navigationOptions: ({navigation}) => {
            return {
                headerStyle: {
                    backgroundColor: '#fff',
                    height: hp("7%"),
                },
                gesturesEnabled: false, //esto hace que sea imposible deslizar hacia atrás tanto en iOS como en Android, si el valor es falso
                headerTintColor: 'rgba(96,100,109, 1)',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    textAlign: 'center',
                    flex: 1,
                    color: '#fff', //tal que no veamos el título de la página actual
                },
                // poner un ícono en el encabezado derecho: mapIcon onpress navegar a mapScreen
                headerRight: (<View style={styles.headerButtonContainer}>
                        <TouchableHighlight onPress={() => {
                            navigation.navigate('Map')
                        }
                        } style={styles.headerBarIcons}>
                            <IconEntypo name="map" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                        </TouchableHighlight>
                    </View>
                ),
                // coloque el icono de vista general en el encabezado izquierdo. Al presionar, llegamos a la pantalla de resumen y damos las respuestas
                // de las preguntas con los parámetros de navegación de modo que casi no hay demora en mostrar los botones correctamente
                // y el nombre de la pantalla actual, de modo que el botón atrás en la pantalla de resumen se pueda implementar correctamente.
                headerLeft: (<View style={styles.headerButtonContainer}>
                        <TouchableHighlight onPress={() => {
                            navigation.navigate('Overview', {
                                answer1: AnswerSheet.getAnswer(1),
                                answer2: AnswerSheet.getAnswer(2),
                                answer3: AnswerSheet.getAnswer(3),
                                answer4: AnswerSheet.getAnswer(4),
                                answer5: AnswerSheet.getAnswer(5),
                                answer6: AnswerSheet.getAnswer(6),
                                answer7: AnswerSheet.getAnswer(7),
                                answer8: AnswerSheet.getAnswer(8),
                                answer9: AnswerSheet.getAnswer(9),
                                answer10: AnswerSheet.getAnswer(10),
                                originScreenName: navigation.state.routeName
                            })
                        }
                        } style={styles.headerBarIcons}>
                            <IconMaterialCommunityIcons name="format-list-bulleted" size={hp("5%")}
                                                        color="rgba(96,100,109, 1)"/>
                        </TouchableHighlight>
                    </View>
                ),
                headerBackTitle: null, // si el título tiene más de 4 letras, el título alternativo será 'back' por defecto, pero no quiero esto,
                // así que lo configuré como nulo para que la etiqueta ya no se muestre en Android ni en iOS
            }
        }
    }
);

// exportar siempre las variables, funciones y clases para uso entre documentos
export default NavigationStack;

