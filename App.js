import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';

//Platform
import { Platform } from 'react-native';

const MainNavigator = createStackNavigator(
{
    Home: HomeScreen,
    Game: GameScreen,
    Over: GameOverScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions:
  {
    title: 'Guess Number',
    headerTintColor: 'white', //Header button colors
    headerStyle:
    {
      backgroundColor: Platform.OS === 'ios' ? 'lightblue' : 'pink' // header bg color
    },
    headerTitleStyle: 
    {
      color: 'black' // header font color
    }
  }
});

export default createAppContainer(MainNavigator);