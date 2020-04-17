import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Colors from "../constants/Colors";


const TextField = (props) =>
{


	return (
		<TextInput
			style={{...styles.textFieldStyle, ...props.style}}
			{...props}//Passing props from children to customize
			
		/>
		);
};

const styles = StyleSheet.create({
 textFieldStyle: {
  borderBottomWidth: 1,
  borderBottomColor: Colors.primaryColor,
  fontSize: 25,
	alignSelf: "center",
		textAlign: 'center',
	minWidth: 50
 
 },
});

export default TextField;