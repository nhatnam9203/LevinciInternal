
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Setting, Task,Account,Work } from '../screen';
import TabBottom from '../component/TabBottom';

const Tab = createMaterialTopTabNavigator(
	{
		Work,
		Setting,
		Task,
		Account
	},
	{
		tabBarPosition: 'bottom',
		tabBarComponent: TabBottom,
		initialRouteName : 'Work'
	}
);
export default Tab;
