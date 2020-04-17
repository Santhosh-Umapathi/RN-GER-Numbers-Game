import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';

const MainNavigator = createStackNavigator(
{
    Home: HomeScreen,
    Game: GameScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions:
  {
    title: 'Guess Number',
    headerTintColor: 'white', //Header button colors
    headerStyle:
    {
      backgroundColor: 'pink' // header bg color
    },
    headerTitleStyle: 
    {
      color: 'black' // header font color
    }
  }
});

export default createAppContainer(MainNavigator);