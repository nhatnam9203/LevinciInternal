
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Home, Setting, Task } from '../screen';
import TabBottom from '../component/TabBottom';

const Tab = createMaterialTopTabNavigator(
	{
		Home,
		Setting,
		Task
	},
	{
		tabBarPosition: 'bottom',
		tabBarComponent: TabBottom
	}
);
export default Tab;
