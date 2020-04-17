import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button  } from 'react-native';


const generateRN = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNum = Math.floor(Math.random() * (max - min)) + min;
	if (randomNum === exclude)
	{
		return generateRN(min, max, exclude);
	}
	else
	{
		return randomNum;	
	}
	
}


const GameScreen = (props) =>
{

	const [currentRN, setCurrentRN] = useState(generateRN(1,100,props.userNumber))

	return (
		<View style={styles.containerView}>
			<Text style={styles.text}>GameScreen</Text>
		</View>
		);
};

const styles = StyleSheet.create({
	containerView:
	{
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: 
	{
		fontSize: 30,
	},
});

export default GameScreen;