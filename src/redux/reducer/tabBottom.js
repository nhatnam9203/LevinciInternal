import createReducer from '../createReducer';
import images from '@assets/images';
import NavigationServices from '@navigator/NavigationServices';
import { Animated } from 'react-native';
import { scaleHeight } from '@utils';

const initialState = {
	isOpenBottom: false,
	height: new Animated.Value(scaleHeight(10)),
	activeItem: 'Work',
	currentIcons: [
		{
			name: 'Task',
			Icon: images.Task,
			IconInActive: images.TaskInActive,
			navigate: () => NavigationServices.navigate('Task')
		},
		{
			name: 'Work',
			Icon: images.Work,
			IconInActive: images.WorkInActive,
			navigate: () => NavigationServices.navigate('Work')
		},
		{
			name: 'Mail',
			Icon: images.Mail,
			IconInActive: images.MailInActive,
			navigate: () => NavigationServices.navigate('Mail')
		}
	],
	indexActive: 1
};

const tabBottom = createReducer(initialState, {
	['TOGGLE_BOTTOM'](state, action) {
		return { ...state, isOpenBottom: !state.isOpenBottom };
	},
	['SET_ACTIVE_INDEX'](state, action) {
		const { index } = action;
		return { ...state, indexActive: index };
	},
	['SET_ACTIVE_ITEM'](state, action) {
		const { item } = action;
		return { ...state, activeItem: item.name };
	},
	['SET_CURRENT_ICONS'](state, action) {
		const { item } = action;
		let { currentIcons, indexActive } = state;
		const _pos = currentIcons.findIndex((obj) => obj.name === item.name);
		if (_pos !== -1) return { ...state,indexActive : _pos };
		currentIcons[indexActive] = item;
		return { ...state, currentIcons };
	},
	['RESET_TAB_BOTTOM'](state, action) {
		return {
			...state,
			isOpenBottom: false,
			height: new Animated.Value(scaleHeight(10)),
			activeItem: 'Work',
			currentIcons: [
				{
					name: 'Task',
					Icon: images.Task,
					IconInActive: images.TaskInActive,
					navigate: () => NavigationServices.navigate('Task')
				},
				{
					name: 'Work',
					Icon: images.Work,
					IconInActive: images.WorkInActive,
					navigate: () => NavigationServices.navigate('Work')
				},
				{
					name: 'Mail',
					Icon: images.Mail,
					IconInActive: images.MailInActive,
					navigate: () => NavigationServices.navigate('Mail')
				}
			],
			indexActive: 1
		};
	}
});
export default tabBottom;
