import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View,
 TouchableOpacity,
 Button,
 Flatlist,
 TouchableWithoutFeedback,
 Keyboard,
 Alert,
} from "react-native";
//Components
import Colors from "../constants/Colors";
import Card from "../components/Card";
import TextField from "../components/TextField";
import ChosenNumber from '../components/ChosenNumber';

export default class HomeScreen extends Component {
 constructor(props) {
  super(props);
  this.state = {
   inputVal: "",
   confirmed: false,
   savedVal: null,
  };
 }

 //Handle Input with only number, no special chars
 inputHandler = (inputText) => {
  this.setState({
   inputVal: inputText.replace(/[^0-9]/g, ""),
  });
 };

 //Reset Number
 resetHandler = () => {
  this.setState({ inputVal: "", confirmed: false, savedVal:null });
 };

 //Confirm Number
 confirmHandler = () => {
  const chosenNumber = parseInt(this.state.inputVal);
  if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
	  Alert.alert("Invalid Number!", "Enter a Number between 0 - 99", [{ text: 'ok', style: 'destructive', onPress: this.resetHandler }]);
	  return;
  }
  this.setState({
   confirmed: true,
   inputVal: "",
   savedVal: chosenNumber,
  });
	 Keyboard.dismiss();
 };

	confirmedNumber; //Empty Confirmed number declared

 render() {
  if (this.state.confirmed) {
	  this.confirmedNumber = <ChosenNumber value={this.state.savedVal}/>
  }

  return (
   <TouchableWithoutFeedback
    onPress={() => {
     Keyboard.dismiss();
    }}
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
       onChangeText={(inputText) => this.inputHandler(inputText)}
       value={this.state.inputVal}
      />
      <View style={styles.buttonView}>
       <Button
        title="Reset"
        onPress={this.resetHandler}
        style={styles.buttonStyle}
        color={Colors.secondaryColor}
       />
       <Button
        title="Continue"
        onPress={this.confirmHandler}
        style={styles.buttonStyle}
        color={Colors.primaryColor}
       />
      </View>
     </Card>
     {this.confirmedNumber}
    </View>
   </TouchableWithoutFeedback>
  );
 }
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
