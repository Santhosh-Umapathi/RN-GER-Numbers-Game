import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../constants/Colors';

//MARK: --------------------	Start Button	-----------------------
const StartButton = ({ children, onPress }) => {



	let ButtonPlatform = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version > 21)
	{
		ButtonPlatform = TouchableNativeFeedback;
	}


	return (
  <View style={styles.parentView}>
   <ButtonPlatform onPress={onPress} activeOpacity={0.7}>
    <View style={styles.containerView}>
     <Text style={styles.text}>{children}</Text>
    </View>
   </ButtonPlatform>
  </View>
 );
};

const styles = StyleSheet.create({
	parentView: {
		borderRadius: 20,
	overflow: 'hidden'	
	},
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