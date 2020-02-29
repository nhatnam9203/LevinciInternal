import { createStackNavigator } from 'react-navigation-stack';
import { Splash } from '../screen';
export default createStackNavigator(
	{
		Splash
	},
	{
		initialRouteName: 'Splash',
		headerMode: 'none'
	}
);
