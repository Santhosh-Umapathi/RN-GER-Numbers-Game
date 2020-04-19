import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Modal, Image, Dimensions } from 'react-native';
import { ScreenOrientation } from 'expo';

const GameOverScreen = ({navigation}) =>
{
	const rounds = navigation.getParam('rounds')
  const userChoice = navigation.getParam("userChoice");
  
  //To Detect the screen orientation directly instead of Dimensions
  //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

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
 imageView: {
  borderRadius: Dimensions.get("window").width > 350 ? 150 : 75,
  borderWidth: 1,
  borderColor: "pink",
  height: Dimensions.get("window").width > 350 ? 300 : 150,
  width: Dimensions.get("window").width > 350 ? 300 : 150,
  overflow: "hidden",
   margin: Dimensions.get("window").width > 350 ? 20 : 5,
 },
});

export default GameOverScreen;