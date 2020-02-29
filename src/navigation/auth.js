import { createStackNavigator } from 'react-navigation-stack';
import {SignIn,SignUp,Auth} from '../screen'
export default createStackNavigator(
	{
        Auth,
        SignIn,
        SignUp
	},
	{
		initialRouteName: 'Auth',
		headerMode: 'none'
	}
);
