import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView,Image} from 'react-native';
import styles from '../constants/Styles';
import QuestionSheet from '../constants/QuestionSheet';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioFile from '../constants/AudioFile';

/**
 * IDEA:
 * this screen shows the second info text of the quiz
 */
export default class Station2Screen extends React.Component {
  static navigationOptions = {
    title: "Station2Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };   

  render() {
    // differ between ios and android since the scrollview is not implemented in android so far. there we need
    // a workaround over the webview to have a scrollable text
    if(Platform.OS === 'ios'){
      return (      
        <View style={styles.anyWholeScreen}>
          
          {/*show the station title*/}
          <View style={styles.stationInfoTitleTextContainer}>
            <Text style={styles.stationInfoTitleTextFormat}>Estación 2 - Info </Text>
          </View>

          {/*Do a scrollview for the infotext in iOS*/}   
          <View style={styles.stationInfoTextContainer}>
              <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.stationInfoTextIOS}>
                    {QuestionSheet.getInfo(2)}
                  </Text>
              </ScrollView>
          </View>

          {this.showStationInfoAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/} 
          <Image source={require('../assets/images/badgerQuestion7.png')} style={styles.station2InfoBadgerImageStyle}/>

        </View>
      );
    }
    else {
      return(
        <View style={styles.anyWholeScreen}>
            
          {/*show the station title*/}
          <View style={styles.stationInfoTitleTextContainer}>
            <Text style={styles.stationInfoTitleTextFormat}>Estación 1 - Info </Text>
          </View>
                              
          {/*Do a scrollview for the text in android with the help of a webview*/}   
          <View style={styles.stationInfoTextContainer}>
              <Image
                  source={require('../assets/images/imageInfo1.png')}
                  style={styles.homeImageStyle}
              />
          </View>

          {this.showStationInfoAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/}
          <Image source={require('../assets/images/badgerQuestion7.png')} style={styles.station2InfoBadgerImageStyle}/>

        </View>
      );
    }
  } 

  /**
   * IDEA:
   * write this function for code reuse and if we alter something, do it only here and not in the ios AND android section
   */
  showStationInfoAudioAndNextButton(){      
    return(
      <View style={styles.stationInfoBottomContainer}>
        {/* show three buttons for the audio file: play, pause and stop*/}
        <View style={styles.stationInfoAudioContainer}>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station2Info','play')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='play-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station2Info','pause')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='pause-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station2Info','stop')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='stop-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question
            if the audio is playing when the user wants to leave the screen, then the audio should be paused
            if the user comes from the result screen, he should navigate to the submittedStation and no more to the question
            if the user comes from the result screen, he should navigate BACK to the result screen and not to the previous question 
        */}   
      <View style={styles.stationInfoBottomNextContainer}>
        <TouchableHighlight onPress={() => {
                if(AudioFile.getAudioStatus('Station2Info')){
                  AudioFile.audioFunction('Station2Info','pause');
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('Station1Question');
                  }
                }
                else{
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('Station1Question');
                  }
                } 
              }} 
              underlayColor="rgba(96,100,109, 1)" 
              style={styles.stationInfoNextButtonStyle}> 
            <Text style={styles.stationInfoNextButtonText}>Volver </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
                  if(AudioFile.getAudioStatus('Station2Info')){
                    AudioFile.audioFunction('Station2Info','pause');
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation2');
                    }
                    else{
                      this.props.navigation.navigate('Station2Question');
                    }
                  }
                  else{
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation2');
                    }
                    else{
                      this.props.navigation.navigate('Station2Question');
                    }
                  } 
                }} 
                underlayColor="rgba(96,100,109, 1)" 
                style={styles.stationInfoNextButtonStyle}> 
              <Text style={styles.stationInfoNextButtonText}>Pregunta </Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}
