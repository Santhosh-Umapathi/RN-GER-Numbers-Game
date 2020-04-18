import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//Components
import Colors from "../constants/Colors";
import Card from "../components/Card";
import StartButton from './StartButton';
//MARK: --------------------	Start Game	-----------------------
const ChosenNumber = (props) =>
{
	return (
  <Card style={styles.cardView}>
   <Text style={{ fontSize: 20, fontFamily: "open-sans" }}>
    {" "}
    Seleted Number
   </Text>

   <View style={styles.numberView}>
    <Text style={styles.numberStyle}>{props.value}</Text>
   </View>

      <StartButton onPress={props.nav}>
        Start Game
      </StartButton>
  </Card>
 );
};

const styles = StyleSheet.create({
 cardView: {
  shadowColor: Colors.primaryColor,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
 },
 numberStyle: {
  fontSize: 35,
  fontFamily: "open-sans-bold",
 },
 numberView: {
  margin: 20,
  padding: 10,
  borderRadius: 10,
  borderWidth: 0.5,
  borderColor: Colors.secondaryColor,
 },
});

export default ChosenNumber;