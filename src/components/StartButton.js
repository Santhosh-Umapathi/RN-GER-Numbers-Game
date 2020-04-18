import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

//MARK: --------------------	Start Button	-----------------------
const StartButton = ({ children, onPress }) => {
 return (
  <TouchableOpacity onPress={onPress} activeOpacity= {0.7} >
   <View style={styles.containerView}>
    <Text style={styles.text}>{children}</Text>
   </View>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
	containerView:
	{
		
		backgroundColor: Colors.secondaryColor,
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: 
	{
		fontSize: 20,
		fontFamily: 'open-sans',
		color:'white'
	},
});

export default StartButton;