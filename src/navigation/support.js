import { createStackNavigator } from 'react-navigation-stack';
import { TaskAdd } from '../screen';
export default createStackNavigator(
	{
		TaskAdd
	},
	{
		initialRouteName: 'TaskAdd',
		headerMode: 'none'
	}
);
