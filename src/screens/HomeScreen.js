import React, { useState } from "react";
import {
 Text,
 StyleSheet,
 View,
 Button,
 TouchableWithoutFeedback,
 Keyboard,
 Alert,
} from "react-native";
//Components
import Colors from "../constants/Colors";
import Card from "../components/Card";
import TextField from "../components/TextField";
import ChosenNumber from '../components/ChosenNumber';

const HomeScreen = ({navigation}) =>
{
    
const [inputVal, setInputVal] = useState("")
const [confirmed, setConfirmed] = useState(false)
const [savedVal, setSavedVal] = useState(null)

    //Handle Input with only number, no special chars
    const inputHandler = (inputText) =>
    {
        setInputVal(inputText.replace(/[^0-9]/g, ""))
    };

    //Reset Number
    const resetHandler = () =>
    {
        setInputVal('');
        setConfirmed(false);
        setSavedVal(null)
    };

    //Confirm Number
    const confirmHandler = () =>
    {
        const chosenNumber = parseInt(inputVal);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
	        Alert.alert("Invalid Number!", "Enter a Number between 0 - 99", [{ text: 'ok', style: 'destructive', onPress: resetHandler }]);
	        return;
        }
        setInputVal("");
        setConfirmed(true);
        setSavedVal(chosenNumber);
	    Keyboard.dismiss();
    };

    let confirmedNumber; //Empty Confirmed number declared
    
    navigation.addListener('willFocus', () => {
        setConfirmed(false);
    }
    )

	
    if (confirmed)
    {
        confirmedNumber = <ChosenNumber
            value={savedVal}
            nav={() => {
                navigation.navigate('Game', {userChoice: savedVal})
            }}
        />
    }

  return (
   <TouchableWithoutFeedback
    onPress={() => { Keyboard.dismiss() }}
   >
    <View style={styles.containerView}>
     <Text style={styles.headerText}> Start the Game </Text>

     <Card style={styles.cardView}>
      <Text
       style={{
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
       }}
      >
       Enter a Number
      </Text>
      <TextField
       keyboardType="number-pad"
       blurOnSubmit
       maxLength={2}
       onChangeText={(inputText) => inputHandler(inputText)}
       value={inputVal}
      />
      <View style={styles.buttonView}>
       <Button
        title="Reset"
        onPress={resetHandler}
        style={styles.buttonStyle}
        color={Colors.secondaryColor}
       />
       <Button
        title="Continue"
        onPress={confirmHandler}
        style={styles.buttonStyle}
        color={Colors.primaryColor}
       />
      </View>
     </Card>
     {confirmedNumber}
    </View>
   </TouchableWithoutFeedback>
  );
 }


const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
 headerText: {
  fontSize: 30,
  textAlign: "center",
  marginTop: 20,
 },
 inputStyle: {
  width: 40,
 },
 buttonView: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 20,
  marginBottom: 10,
 },
 buttonStyle: {
  width: "100%",
  maxWidth: "80%",
 },
 cardView: {
  shadowColor: Colors.primaryColor,
 },
});

export default HomeScreen;