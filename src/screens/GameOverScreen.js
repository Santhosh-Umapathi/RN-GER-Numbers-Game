import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Modal, Image  } from 'react-native';

const GameOverScreen = ({navigation}) =>
{
	const rounds = navigation.getParam('rounds')
	const userChoice = navigation.getParam("userChoice");

	return (
  //<Modal animationType='slide'>
  <View style={styles.containerView}>
   <Text style={styles.text}>Game Over</Text>
   <View style={styles.imageView}>
        <Image
          //fadeDuration={300} //milliseconds
     source={require("../../assets/success.png")}
     resizeMode="stretch"
     style={{ width: "100%", height: "100%" }}
    />
   </View>
   <Text style={{ margin: 5 }}>
		Rounds - {""}
		<Text style={{ color: "red", margin: 5 }}>{rounds}</Text>
		{"  "}
		Your Choice was - {""}
		<Text style={{ color: "red", margin: 5 }}>{userChoice}</Text>
   </Text>
   <Button
    title="Restart Game"
    onPress={() => {
     navigation.popToTop();
    }}
   />
  </View>
  //</Modal>
 );
};

GameOverScreen.navigationOptions = ({navigation}) =>
{
	return {
		headerTitle:'Game Over',
	};
}

const styles = StyleSheet.create({
 containerView: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
 },
 text: {
  fontSize: 30,
  fontFamily: "open-sans",
	},
	imageView:
	{
		borderRadius: 150,
		borderWidth: 1,
		borderColor:'pink',
		height: 300,
		width: 300,
		overflow: 'hidden',
		margin: 20
 }
});

export default GameOverScreen;