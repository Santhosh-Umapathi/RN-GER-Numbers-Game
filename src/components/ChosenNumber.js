import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';
import Colors from "../constants/Colors";
import Card from "../components/Card";

const ChosenNumber = (props) =>
{

	return (
		<Card style={styles.cardView}>
			
			<Text style={{ fontSize: 20 }}> Seleted Number</Text>
			
			<View style={styles.numberView}>
				<Text style={styles.numberStyle}>{props.value}</Text>
			</View>
			
			<Button
				title='Start Game'
				color={Colors.startGame}
				onPress={props.nav}
			/>
		</Card>

 );
};

const styles = StyleSheet.create({
 cardView: {
  shadowColor: Colors.primaryColor,
		alignItems: "center",
		justifyContent: 'center',
		alignSelf:'center'
 },
 numberStyle: {
  fontSize: 35,
  fontWeight: "bold",
 },
	numberView: {
		margin: 20,
		padding: 10,
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: Colors.secondaryColor
	},
 
});

export default ChosenNumber;