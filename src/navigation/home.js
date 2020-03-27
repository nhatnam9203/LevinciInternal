import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Setting, Task, Account, Work, Mail, ProjectDetail,Statistic } from '../screen';
import TabBottom from '../component/TabBottom';

const Tab = createMaterialTopTabNavigator(
	{
		Work,
		Setting,
		Task,
		Account,
		Mail,
		ProjectDetail,
		Statistic
	},
	{
		tabBarPosition: 'bottom',
		tabBarComponent: TabBottom,
		initialRouteName: 'Work',
		swipeEnabled : false
	}
);
export default Tab;
