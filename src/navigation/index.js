import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './auth';
import Home from './home';
import Splash from './splash';

export default createAppContainer(
	createSwitchNavigator(
		{
			Auth,
			Home,
			Splash
		},
		{
			backBehavior: 'order',
			initialRouteName: 'Splash',
			headerMode: 'none'
		}
	)
);
