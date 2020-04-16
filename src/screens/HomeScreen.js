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
				
		<TextInput style={styles.inputStyle} />
	
		<View style={styles.buttonView}>
			<Button title="Reset" onPress={() => {}} style={styles.buttonStyle} />
			<Button title="Continue" onPress={() => {}} style={styles.buttonStyle} />
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
	}

});