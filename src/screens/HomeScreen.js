import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Button, Flatlist } from 'react-native';
//Colors
import Colors from "../constants/Colors";
//Card
import Card from '../components/Card';
//TextInput
import TextField from '../components/TextField';

export default class HomeScreen extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			text:''
		};
	}


render()
{
return (
 <View style={styles.containerView}>
  <Text style={styles.headerText}> Start the Game </Text>

		<Card style={styles.cardView}>
			<Text style={{ fontSize: 20, textAlign:'center', marginVertical: 10,}}>Enter a Number</Text>
	<TextField
		keyboardType="number-pad"
		blurOnSubmit
		maxLength={2}	
		//style={styles.inputStyle}		
	/>
   <View style={styles.buttonView}>
    <Button
     title="Reset"
     onPress={() => {}}
     style={styles.buttonStyle}
     color={Colors.secondaryColor}
    />
    <Button
     title="Continue"
     onPress={() => {}}
     style={styles.buttonStyle}
     color={Colors.primaryColor}
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
 },
 buttonStyle: {
  width: "100%",
  maxWidth: "80%",
 },
 cardView: {
  shadowColor: Colors.primaryColor,
 },
});