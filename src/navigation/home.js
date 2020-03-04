import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Setting, Task, Account, Work, Mail, ProjectDetail } from '../screen';
import TabBottom from '../component/TabBottom';

const Tab = createMaterialTopTabNavigator(
	{
		Work,
		Setting,
		Task,
		Account,
		Mail,
		ProjectDetail
	},
	{
		tabBarPosition: 'bottom',
		tabBarComponent: TabBottom,
		initialRouteName: 'Work'
	}
);
export default Tab;
