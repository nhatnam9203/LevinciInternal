import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
import { SignIn, SignUp, Auth } from '../screen';
export default createStackNavigator(
	{
		Auth,
		SignIn,
		SignUp
	},
	{
		initialRouteName: 'Auth',
		transitionConfig: () => fromRight(),
		headerMode: 'none'
	}
);
