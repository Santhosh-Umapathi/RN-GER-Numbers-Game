import React, { Component } from "react";
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 TouchableOpacity,
 Button,
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
   currentRN: generateRN(1, 100, props.userNumber),
  };
 }
	

	render() {
	const userChoice = this.props.navigation.getParam("userChoice");

  return (
   
	  <View style={styles.containerView}>
		  <Text style={{ fontSize: 25, alignSelf: 'center', marginTop: 10 }}>
			Opponent's Guess
		</Text>
		  
    <Text style={styles.textStyle}>{this.state.currentRN}</Text>

    <Card style={{marginHorizontal: 60}}>
     <View style={styles.buttonView}>
      <Button title="Lower" onPress={() => {}} style={styles.buttonStyle} />
      <Button title="Greater" onPress={() => {}} style={styles.buttonStyle} />
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
  margin: 10
 },
 buttonStyle: {
  width: "100%",
  minWidth: "80%",
	},
	textStyle:
	{
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		borderColor: Colors.primaryColor,
		borderWidth: 1,
		borderRadius: 10,
		alignSelf: 'center',
		padding: 15
		
 }
});
