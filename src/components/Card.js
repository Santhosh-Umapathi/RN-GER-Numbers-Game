import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) =>
{
	//MARK: --------------------	Card	-----------------------
	return (
		<View style={{...styles.cardView, ...props.style}}>
			{props.children}
		</View>
		);
};

const styles = StyleSheet.create({
 cardView: {
  //iOS Card Shadow
  shadowColor: "black",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  //Android Card Shadow
  elevation: 15,
  //Card View Settings
  backgroundColor: "white",
  margin: 10,
  padding: 10,
  borderRadius: 10,
 },
});

export default Card;