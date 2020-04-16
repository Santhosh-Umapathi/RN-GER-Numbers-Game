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
			<View>
				<Text> HomeScreen </Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	containerView:
	{
		flex:1
	}
});