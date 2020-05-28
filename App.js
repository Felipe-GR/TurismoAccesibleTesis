import React from 'react';

// importe este controlador para poder desactivar el botón de retroceso de Android
import {BackHandler} from 'react-native';

// importar el NavigationStack autodefinido del siguiente documento
import NavigationStack from './navigation/StackNavigator';

export default class App extends React.Component {
    /**
     * Con estos tres métodos, podemos desactivar el botón Atrás en Android durante la aplicación, de modo que después de que el usuario haya enviado sus
     * soluciones, ya no pueda regresar.
     * Esto debería ser incluso imposible con el botón de retroceso predeterminado de Android.
     */
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

    // inicie la aplicación llamando al StackNavigator con su pantalla inicial
    render() {
        return (
            <NavigationStack/>
        );
    }
}
