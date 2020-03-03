import { createStackNavigator } from 'react-navigation-stack';
import { TaskAdd,Account } from '../screen';
export default createStackNavigator(
	{
		TaskAdd,
	},
	{
		initialRouteName: 'TaskAdd',
		headerMode: 'none'
	}
);
