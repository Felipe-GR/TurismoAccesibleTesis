import React from 'react';
import {Audio} from 'expo';

/**
 * Esta clase contiene todos los archivos de audio y todos los métodos para reproducirlos.
 */
export class AudioFile extends React.Component {

    constructor(props) {

        super(props);

        // Crear un nuevo objeto de sonido.
        this.howToTextSound = new Audio.Sound();
        this.Station1InfoSound = new Audio.Sound();
        this.Station2InfoSound = new Audio.Sound();
        this.Station3InfoSound = new Audio.Sound();
        this.Station4InfoSound = new Audio.Sound();
        this.Station5InfoSound = new Audio.Sound();
        this.Station6InfoSound = new Audio.Sound();
        this.Station7InfoSound = new Audio.Sound();
        this.Station8InfoSound = new Audio.Sound();
        this.Station9InfoSound = new Audio.Sound();
        this.Station10InfoSound = new Audio.Sound();

        // Variables para manejar pausa y reproducir.
        this.isPausedHowTo = true;
        this.isPausedStation1Info = true;
        this.isPausedStation2Info = true;
        this.isPausedStation3Info = true;
        this.isPausedStation4Info = true;
        this.isPausedStation5Info = true;
        this.isPausedStation6Info = true;
        this.isPausedStation7Info = true;
        this.isPausedStation8Info = true;
        this.isPausedStation9Info = true;
        this.isPausedStation10Info = true;

        // Variables para manejar la carga no múltiple de los archivos de audio.
        this.howToTextIsLoaded = false;
        this.station1InfoTextIsLoaded = false;
        this.station2InfoTextIsLoaded = false;
        this.station3InfoTextIsLoaded = false;
        this.station4InfoTextIsLoaded = false;
        this.station5InfoTextIsLoaded = false;
        this.station6InfoTextIsLoaded = false;
        this.station7InfoTextIsLoaded = false;
        this.station8InfoTextIsLoaded = false;
        this.station9InfoTextIsLoaded = false;
        this.station10InfoTextIsLoaded = false;
    };

    /**
     * Este método devuelve verdadero si se está reproduciendo el audio en el objetivo solicitado, de lo contrario falso
     * @param {type:string, la ubicación donde se reproduce el archivo de audio, por ejemplo. 'HowTo' si desea conocer el estado del archivo de audio
     * desde la pantalla HowToScreen} objetivo
     */
    getAudioStatus(target) {
        switch (target) {
            case 'HowTo':
                return !this.isPausedHowTo;
            case 'Station1Info':
                return !this.isPausedStation1Info;
            case 'Station2Info':
                return !this.isPausedStation2Info;
            case 'Station3Info':
                return !this.isPausedStation3Info;
            case 'Station4Info':
                return !this.isPausedStation4Info;
            case 'Station5Info':
                return !this.isPausedStation5Info;
            case 'Station6Info':
                return !this.isPausedStation6Info;
            case 'Station7Info':
                return !this.isPausedStation7Info;
            case 'Station8Info':
                return !this.isPausedStation8Info;
            case 'Station9Info':
                return !this.isPausedStation9Info;
            case 'Station10Info':
                return !this.isPausedStation10Info;
        }
    }

    /**
     * Haga que el sonido también se esté reproduciendo en ios, incluso si el teléfono está en modo silencioso, esto se hace configurando
     * playsInSilentModeIOS en true. Para Android, esto se establece por defecto en verdadero.
     * Para obtener más información, consulte la definición de los modos.
     * IMPORTANTE: todos los modos tienen que configurarse, de lo contrario obtendrá un error.
     */
    async prepareSound() {
        await Expo.Audio.setIsEnabledAsync(true);
        await Expo.Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            allowsRecordingIOS: false,
            interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            shouldDuckAndroid: false,
            interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
        });
    }

    /**
     * Reproducir archivos de audio de la biblioteca en  assets/sounds.
     * target: nombre de la pantalla donde se debe reproducir el audio.
     * mode: cómo deberían actuar los medios -> reproducir, pausar, parar invocando este método
     */
    async audioFunction(target, mode) {

        switch (target) {

            case 'HowTo': {
                // modo: reproducir
                if (mode === 'play') {
                    // Si el audio se reproduce por primera vez, primero tenemos que cargar el archivo de audio
                    if (this.howToTextIsLoaded === false) {
                        this.howToTextIsLoaded = true;
                        await this.howToTextSound.loadAsync(require('../assets/sounds/howToSoundM.mp3'));
                    }
                    // Si el audio ya está cargado, difieren los casos si el archivo de audio se está reproduciendo o está en pausa en este momento.
                    // Si está en pausa -> entonces el archivo debería reproducirse en el punto en el que el usuario se detuvo
                    // si no, reproduce el archivo de audio desde el principio
                    if (this.isPausedHowTo === true) {
                        this.prepareSound(); // tal que el sonido también se reproduce en ios, incluso el teléfono está en modo silencioso
                        this.isPausedHowTo = false;
                        await this.howToTextSound.playAsync();
                    } else {
                        this.prepareSound(); // tal que el sonido también se reproduce en ios, incluso el teléfono está en modo silencioso
                        await this.howToTextSound.replayAsync();
                    }
                }
                // modo: pausa y el archivo de audio ya estaba cargado -> solo pausa el audio y establece el indicador isPaused en true
                // si el archivo de audio aún no se ha cargado -> no hacer nada ya que no tiene sentido pausar un audio que nunca se ha
                // reproducido o que no se está reproduciendo.
                else if (mode === 'pause' && this.howToTextIsLoaded === true) {
                    await this.howToTextSound.pauseAsync();
                    this.isPausedHowTo = true;
                }
                // modo: detener Y el archivo de audio ya estaba cargado -> solo detiene un audio que se está reproduciendo en este momento.
                // Si el audio no se reproduce, aún podemos detener el archivo y no pasa nada.
                else if (mode === 'stop' && this.howToTextIsLoaded === true) {
                    await this.howToTextSound.stopAsync();
                } else {
                    // error: este modo no existe! ¡Argumento equivocado!
                }
                break;
            }

            case 'Station1Info': {
                if (mode === 'play') {
                    if (this.station1InfoTextIsLoaded === false) {
                        this.station1InfoTextIsLoaded = true;
                        await this.Station1InfoSound.loadAsync(require('../assets/sounds/station1InfoSoundM.mp3'));
                    }
                    if (this.isPausedStation1Info === true) {
                        this.prepareSound();
                        this.isPausedStation1Info = false;
                        await this.Station1InfoSound.playAsync();
                    } else {
                        this.prepareSound();
                        await this.Station1InfoSound.replayAsync();
                    }
                } else if (mode === 'pause' && this.station1InfoTextIsLoaded === true) {
                    await this.Station1InfoSound.pauseAsync();
                    this.isPausedStation1Info = true;
                } else if (mode === 'stop' && this.station1InfoTextIsLoaded === true) {
                    await this.Station1InfoSound.stopAsync();
                } else {
                    // error: este modo no existe! ¡Argumento equivocado!
                }
                break;
            }

            case 'Station2Info': {
                if (mode === 'play') {
                    if (this.station2InfoTextIsLoaded === false) {
                        this.station2InfoTextIsLoaded = true;
                        await this.Station2InfoSound.loadAsync(require('../assets/sounds/station1InfoSoundM.mp3'));
                    }
                    if (this.isPausedStation2Info === true) {
                        this.prepareSound();
                        this.isPausedStation2Info = false;
                        await this.Station2InfoSound.playAsync();
                    } else {
                        this.prepareSound();
                        await this.Station2InfoSound.replayAsync();
                    }
                } else if (mode === 'pause' && this.station2InfoTextIsLoaded === true) {
                    await this.Station2InfoSound.pauseAsync();
                    this.isPausedStation2Info = true;
                } else if (mode === 'stop' && this.station2InfoTextIsLoaded === true) {
                    await this.Station2InfoSound.stopAsync();
                } else {
                    // error: este modo no existe! ¡Argumento equivocado!
                }
                break;
            }

            case 'Station3Info': {
                {
                    if (mode === 'play') {
                        if (this.station3InfoTextIsLoaded === false) {
                            this.station3InfoTextIsLoaded = true;
                            await this.Station3InfoSound.loadAsync(require('../assets/sounds/station2InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation3Info === true) {
                            this.prepareSound();
                            this.isPausedStation3Info = false;
                            await this.Station3InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station3InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station3InfoTextIsLoaded === true) {
                        await this.Station3InfoSound.pauseAsync();
                        this.isPausedStation3Info = true;
                    } else if (mode === 'stop' && this.station3InfoTextIsLoaded === true) {
                        await this.Station3InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station4Info': {
                {
                    if (mode === 'play') {
                        if (this.station4InfoTextIsLoaded === false) {
                            this.station4InfoTextIsLoaded = true;
                            await this.Station4InfoSound.loadAsync(require('../assets/sounds/station2InfoSoundM.mp3'));
                        } else {
                            // error: este modo no existe! ¡Argumento equivocado!
                        }
                        if (this.isPausedStation4Info === true) {
                            this.prepareSound();
                            this.isPausedStation4Info = false;
                            await this.Station4InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station4InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station4InfoTextIsLoaded === true) {
                        await this.Station4InfoSound.pauseAsync();
                        this.isPausedStation4Info = true;
                    } else if (mode === 'stop' && this.station4InfoTextIsLoaded === true) {
                        await this.Station4InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station5Info': {
                {
                    if (mode === 'play') {
                        if (this.station5InfoTextIsLoaded === false) {
                            this.station5InfoTextIsLoaded = true;
                            await this.Station5InfoSound.loadAsync(require('../assets/sounds/station5InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation5Info === true) {
                            this.prepareSound();
                            this.isPausedStation5Info = false;
                            await this.Station5InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station5InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station5InfoTextIsLoaded === true) {
                        await this.Station5InfoSound.pauseAsync();
                        this.isPausedStation5Info = true;
                    } else if (mode === 'stop' && this.station5InfoTextIsLoaded === true) {
                        await this.Station5InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station6Info': {
                {
                    if (mode === 'play') {
                        if (this.station6InfoTextIsLoaded === false) {
                            this.station6InfoTextIsLoaded = true;
                            await this.Station6InfoSound.loadAsync(require('../assets/sounds/station6InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation6Info === true) {
                            this.prepareSound();
                            this.isPausedStation6Info = false;
                            await this.Station6InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station6InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station6InfoTextIsLoaded === true) {
                        await this.Station6InfoSound.pauseAsync();
                        this.isPausedStation6Info = true;
                    } else if (mode === 'stop' && this.station6InfoTextIsLoaded === true) {
                        await this.Station6InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station7Info': {
                {
                    if (mode === 'play') {
                        if (this.station7InfoTextIsLoaded === false) {
                            this.station7InfoTextIsLoaded = true;
                            await this.Station7InfoSound.loadAsync(require('../assets/sounds/station7InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation7Info === true) {
                            this.prepareSound();
                            this.isPausedStation7Info = false;
                            await this.Station7InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station7InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station7InfoTextIsLoaded === true) {
                        await this.Station7InfoSound.pauseAsync();
                        this.isPausedStation7Info = true;
                    } else if (mode === 'stop' && this.station7InfoTextIsLoaded === true) {
                        await this.Station7InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station8Info': {
                {
                    if (mode === 'play') {
                        if (this.station8InfoTextIsLoaded === false) {
                            this.station8InfoTextIsLoaded = true;
                            await this.Station8InfoSound.loadAsync(require('../assets/sounds/station8InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation8Info === true) {
                            this.prepareSound();
                            this.isPausedStation8Info = false;
                            await this.Station8InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station8InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station8InfoTextIsLoaded === true) {
                        await this.Station8InfoSound.pauseAsync();
                        this.isPausedStation8Info = true;
                    } else if (mode === 'stop' && this.station8InfoTextIsLoaded === true) {
                        await this.Station8InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station9Info': {
                {
                    if (mode === 'play') {
                        if (this.station9InfoTextIsLoaded === false) {
                            this.station9InfoTextIsLoaded = true;
                            await this.Station9InfoSound.loadAsync(require('../assets/sounds/station9InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation9Info === true) {
                            this.prepareSound();
                            this.isPausedStation9Info = false;
                            await this.Station9InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station9InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station9InfoTextIsLoaded === true) {
                        await this.Station9InfoSound.pauseAsync();
                        this.isPausedStation9Info = true;
                    } else if (mode === 'stop' && this.station9InfoTextIsLoaded === true) {
                        await this.Station9InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }

            case 'Station10Info': {
                {
                    if (mode === 'play') {
                        if (this.station10InfoTextIsLoaded === false) {
                            this.station10InfoTextIsLoaded = true;
                            await this.Station10InfoSound.loadAsync(require('../assets/sounds/station10InfoSoundM.mp3'));
                        }
                        if (this.isPausedStation10Info === true) {
                            this.prepareSound();
                            this.isPausedStation10Info = false;
                            await this.Station10InfoSound.playAsync();
                        } else {
                            this.prepareSound();
                            await this.Station10InfoSound.replayAsync();
                        }
                    } else if (mode === 'pause' && this.station10InfoTextIsLoaded === true) {
                        await this.Station10InfoSound.pauseAsync();
                        this.isPausedStation10Info = true;
                    } else if (mode === 'stop' && this.station10InfoTextIsLoaded === true) {
                        await this.Station10InfoSound.stopAsync();
                    } else {
                        // error: este modo no existe! ¡Argumento equivocado!
                    }
                    break;
                }
            }
        }
        ;
    };
}

/**
 * Haga una instancia de esta clase de modo que podamos exportarla para un acceso más fácil desde todas las pantallas sin crear siempre una
 * instancia para obtener acceso a los métodos y valores
 */
AudioFile = new AudioFile();

// exportar esta instancia para reutilizar los métodos de otras clases y archivos
export default AudioFile;
