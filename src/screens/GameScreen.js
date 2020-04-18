import React, { useState, useRef, useEffect } from "react";
import {
 View,
 Text,
 StyleSheet,
 Button,
 Alert,
} from "react-native";
//Components
import Card from "../components/Card";
import Colors from "../constants/Colors";

//Generating Random number for guess
const generateRN = (min, max, exclude) =>
{
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
};

const GameScreen = ({navigation}) =>
{

  //Getting param from home screen
  const userChoice = navigation.getParam('userChoice');

  //States
  const [currentRN, setCurrentRN] = useState(generateRN(1, 100, userChoice));

  const [rounds, setRounds] = useState(0)

  //Refs - used to store values even after rerender
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  //called when ever the currentRN changes
  useEffect(() => {
    if (currentRN === userChoice)
    {
      navigation.navigate("Over", { rounds: rounds, userChoice: userChoice });
    }
  }, [currentRN])
 

 nextNumberHandler = (valueType) => {
  if(
      (valueType === "lower" && currentRN < userChoice) ||
      (valueType === "greater" && currentRN > userChoice)
  )
  {
    Alert.alert("Don 't lie", "No Cheating", [{ text: "Sorry", style: "cancel" }]);
    return;
  }
	 
	if (valueType === "lower")
  {
    currentHigh.current = currentRN;
	}
  else if (valueType === "greater")
  {
      currentLow.current = currentRN;
  }
	const nextNum = generateRN(currentLow.current,currentHigh.current,currentRN);
   setCurrentRN(nextNum);
   setRounds(rounds => rounds + 1);
 };

 
  return (
   <View style={styles.containerView}>
    <Text
     style={{
      fontSize: 25,
      alignSelf: "center",
      marginTop: 10,
      fontFamily: "open-sans",
     }}
    >
     Opponent's Guess
    </Text>

    <Text style={styles.textStyle}>{currentRN}</Text>

    <Card style={{ marginHorizontal: 60 }}>
     <View style={styles.buttonView}>
      <Button
       title="Lower"
       onPress={() => nextNumberHandler("lower")}
       style={styles.buttonStyle}
      />
      <Button
       title="Greater"
       onPress={() => nextNumberHandler("greater")}
       style={styles.buttonStyle}
      />
     </View>
    </Card>
   </View>
  );
 }


const styles = StyleSheet.create({
 containerView: {
  flex: 1,
 },
 buttonView: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  margin: 10,
 },
 buttonStyle: {
  width: "100%",
  minWidth: "80%",
 },
 textStyle: {
  fontSize: 30,
  textAlign: "center",
  margin: 10,
  borderColor: Colors.primaryColor,
  borderWidth: 1,
  borderRadius: 10,
  alignSelf: "center",
  padding: 15,
 },
});

GameScreen.navigationOptions = ({ navigation }) =>
{
  return {
    headerTitle: "Game Screen",
  };
};

export default GameScreen;
