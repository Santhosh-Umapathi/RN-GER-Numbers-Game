import React, { Component, useRef } from "react";
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 TouchableOpacity,
 Button,
 Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";

//Generating Random number for guess
const generateRN = (min, max, exclude) => {
 min = Math.ceil(min);
 max = Math.floor(max);
 const randomNum = Math.floor(Math.random() * (max - min)) + min;
 if (randomNum === exclude) {
  return generateRN(min, max, exclude);
 } else {
  return randomNum;
 }
};

export default class GameScreen extends Component {
 constructor(props) {
  super(props);
	 this.state = {
		 currentLow: 1,
		 currentHigh: 100,
   userChoice: this.props.navigation.getParam("userChoice"),
   currentRN: generateRN(1, 100, props.userNumber),
  };
 }

 

 nextNumberHandler = (valueType) => {
  if (
   (valueType === "lower" && this.state.currentRN < this.state.userChoice) ||
   (valueType === "greater" && this.state.currentRN > this.state.userChoice)
  ) {
   Alert.alert("Don 't lie", "No Cheating", [
    { text: "Sorry", style: "cancel" },
   ]);
   return;
  }
	 
	if (valueType === "lower")
	{
    this.setState({ currentHigh: this.state.currentRN })
      const nextNum = generateRN(
       this.state.currentLow,
       this.state.currentHigh,
       this.state.currentRN
      );
      this.setState({ currentRN: nextNum });
	}
	else if (valueType === "greater") {
    this.setState({ currentLow: this.state.currentRN })
      const nextNum = generateRN(
       this.state.currentLow,
       this.state.currentHigh,
       this.state.currentRN
      );
      this.setState({ currentRN: nextNum });
    }
	 const nextNum = generateRN(
   this.state.currentLow,
   this.state.currentHigh,
   this.state.currentRN
  );
  this.setState({ currentRN: nextNum });
	 
 };

 render() {
  return (
   <View style={styles.containerView}>
    <Text style={{ fontSize: 25, alignSelf: "center", marginTop: 10 }}>
     Opponent's Guess
    </Text>

    <Text style={styles.textStyle}>{this.state.currentRN}</Text>

    <Card style={{ marginHorizontal: 60 }}>
     <View style={styles.buttonView}>
      <Button
       title="Lower"
       onPress={this.nextNumberHandler.bind(this, 'lower')}
       style={styles.buttonStyle}
      />
      <Button
       title="Greater"
       onPress={
        this.nextNumberHandler.bind(this, 'greater')}
       style={styles.buttonStyle}
      />
     </View>
    </Card>
   </View>
  );
 }
}

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
 buttonView: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  margin: 10,
 },
 buttonStyle: {
  width: "100%",
  minWidth: "80%",
 },
 textStyle: {
  fontSize: 30,
  textAlign: "center",
  margin: 10,
  borderColor: Colors.primaryColor,
  borderWidth: 1,
  borderRadius: 10,
  alignSelf: "center",
  padding: 15,
 },
});

GameScreen.navigationOptions = ({ navigation }) => {
 return {
  headerTitle: "Game Screen",
 };
};
