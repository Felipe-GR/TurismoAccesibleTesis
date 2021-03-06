import React from 'react';
import {Text, View, TouchableHighlight, ScrollView, Alert, Image} from 'react-native';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';

/**
 * IDEA:
 * This screen should help the users to get around in the quiz world. Firstly, they should get an overview of all
 * quiz questions, secondly they should be able to see which stations they already did and which they still have to do.
 * Thirdly, if two or more users solve the quizzes, they have a short way to compare their answers with the help of
 * this overview screen.
 */
export default class OverviewScreen extends React.Component {
    static navigationOptions = {
        title: "OverviewScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
        header: null, // do not show the header for design purpose
    };

    render() {
        return (
            <View style={styles.anyWholeScreen}>

                {/*Set the title of the Screen*/}
                <View style={styles.overviewTopContainer}>
                    <Text style={styles.overviewTitleTextFormat}>
                        Resumen
                    </Text>
                </View>

                {/* this section shows the buttons of the different stations and their state solved/unsolved. Moreover
                    the user can scroll up and down due to the ScrollView */}
                <View style={styles.overviewMiddleContainer}>
                    <ScrollView>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('HowTo')}
                                                underlayColor="rgba(96,100,109, 1)"
                                                style={styles.overviewButtonHowToStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>Introducción</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 1
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(1)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 1
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(2)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station3')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 2
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(3)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station4')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 2
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(4)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 5
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(5)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station6')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 6
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(6)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 7
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(7)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station8')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 8
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(8)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 9
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(9)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station10')}
                                                underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Parada 10
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(10)}
                        </View>
                    </ScrollView>
                </View>

                {/* show at the bottom two buttons, one to get back and one to submit your answers if and only if all quizzes has ben solved. */}
                <View style={styles.overviewBottomContainer}>
                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('originScreenName'))}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Volver
                            </Text>
                        </TouchableHighlight>
                        {this.showSubmitButton()}
                    </View>
                </View>

                {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/}
                <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.overviewImageStyle}/>

            </View>
        );
    }

    /**
     * IDEA:
     * If the particular quiz has been solved, show the answer which was given
     * else show a ToDo statement, such that the user knows which quiz he still has
     * to solve. done with the navigation options since the release with the states did
     * not work as excpected. there was too often a delay while updating the questions
     * which were have been solved. we have two cases:
     *      1) question answered -> button shows letter of the answer and has white background, grey text and grey border
     *      2) question unanswered -> button shows white text 'zur Frage' with grey background and border
     * @param {the stationNumber is an integer between 1 and the number of stations the app has} stationNumber
     */
    showDoneOrTodoButton(stationNumber) {
        switch (stationNumber) {
            case 1: {
                if (this.props.navigation.getParam('answer1') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer1')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 2: {
                if (this.props.navigation.getParam('answer2') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer2')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 3: {
                if (this.props.navigation.getParam('answer3') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer3')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 4: {
                if (this.props.navigation.getParam('answer4') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer4')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 5: {
                if (this.props.navigation.getParam('answer5') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer5')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 6: {
                if (this.props.navigation.getParam('answer6') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer6')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 7: {
                if (this.props.navigation.getParam('answer7') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer7')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 8: {
                if (this.props.navigation.getParam('answer8') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer8')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 9: {
                if (this.props.navigation.getParam('answer9') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer9')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
            case 10: {
                if (this.props.navigation.getParam('answer10') === '') {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText}>
                                Pregunta
                            </Text>
                        </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Station' + stationNumber + "Question")}
                            underlayColor="white" style={styles.overviewButtonStyleDone}>
                            <Text style={styles.overviewChosenButtonText}>
                                {this.props.navigation.getParam('answer10')}
                            </Text>
                        </TouchableHighlight>
                    );
                }
            }
        }
    }

    /**
     * IDEA:
     * This method tests if all quizzes has been solved, if so then this function returns true, if not, this function
     * returns false.
     */
    testAllTasksDone() {
        for (let i = 1; i <= 10; ++i) {
            if (AnswerSheet.getAnswer(i) === '') {
                return false;
            }
        }
        return true;
    }

    /**
     * IDEA:
     * If not all questions has been answered, make an alert and do not go to the submit screen until all answers
     * are given. To highlight this behavior show the submit button in another color, such that one could assume that
     * this button is not ready to touch unless you did all the quizzes.
     */
    showSubmitButton() {
        if (this.testAllTasksDone()) {
            return (
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')}
                                    underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Introducción
                    </Text>
                </TouchableHighlight>
            );
        } else {
            return (
                <TouchableHighlight onPress={() => Alert.alert('Advertencia', "¡Responde todas las preguntas primero!")}
                                    underlayColor="rgb(211, 211, 211)"
                                    style={styles.overviewButtonToDoStyleNotSubmitable}>
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Introducción
                    </Text>
                </TouchableHighlight>
            );
        }
    }
}
