import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './auth';
import Home from './home';
import Splash from './splash';
import Support from './support'

export default createAppContainer(
	createSwitchNavigator(
		{
			Auth,
			Home,
			Splash,
			Support
		},
		{
			backBehavior: 'order',
			initialRouteName: 'Splash',
			headerMode: 'none'
		}
	)
);
