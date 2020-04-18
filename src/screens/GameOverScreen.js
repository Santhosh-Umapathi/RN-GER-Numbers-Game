import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Modal  } from 'react-native';

const GameOverScreen = ({navigation}) =>
{
	console.log(navigation);

	const rounds = navigation.getParam('rounds')

	return (
  <Modal animationType='slide'>
   <View style={styles.containerView}>
	<Text style={styles.text}>Game Over, Rounds - {rounds}</Text>
	<Button title='Restart Game' onPress={() => { navigation.popToTop()}}/>	
   </View>
  </Modal>
 );
};

GameOverScreen.navigationOptions = ({navigation}) =>
{
	return {
		headerTitle:'Game Over',
	};
}

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

export default GameOverScreen;