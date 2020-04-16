import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Button, Flatlist } from 'react-native'

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

	<View style={styles.cardView}>
		<TextInput style={styles.inputStyle} placeholder="Enter Number" />

		<View style={styles.buttonView}>
			<Button title="Reset" onPress={() => {}} style={styles.buttonStyle} />
			<Button title="Continue" onPress={() => {}} style={styles.buttonStyle} />
		</View>
	</View>
	</View>
 );
	}
}

const styles = StyleSheet.create({
	containerView:
	{
		flex:1
	},
	headerText:
	{
		fontSize: 30,
		textAlign: 'center',
		marginTop: 20
	},
	inputStyle:
	{
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'pink',
		paddingVertical: 15,
		paddingHorizontal: 10,
		margin: 20,
		fontSize: 20
		
	},
	buttonView:
	{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	buttonStyle:
	{
		width: '100%',
		maxWidth: '80%',
	},
	cardView:
	{
		//Shadow Settings
		//iOS Card
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 5,
		//Android Card
		elevation: 15,
		//Card View Settings
		backgroundColor: 'white',
		marginHorizontal: 10,
		marginVertical: 10,
		padding: 10,
		borderRadius: 10,
	}

});