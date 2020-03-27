import { createStackNavigator } from 'react-navigation-stack';
import { TaskAdd,TaskDetail,Notification } from '../screen';
export default createStackNavigator(
	{
		TaskAdd,
		TaskDetail,
		Notification
	},
	{
		initialRouteName: 'TaskAdd',
		headerMode: 'none'
	}
);
