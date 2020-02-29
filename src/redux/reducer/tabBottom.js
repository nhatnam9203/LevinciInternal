import createReducer from '../createReducer';
import images from '@assets/images';
import NavigationServices from '@navigator/NavigationServices';

const initialState = {
	data : [
		{
			key: 0,
			name: 'Calendar',
			Icon: images.Calendar,
			IconInActive: images.CalendarInActive,
			navigate: () => NavigationServices.navigate('Calendar')
		},
		{
			key: 1,
			name: 'Work',
			Icon: images.Work,
			IconInActive: images.WorkInActive,
			navigate: () => NavigationServices.navigate('Work')
		},
		{
			key: 2,
			name: 'Mail',
			Icon: images.Mail,
			IconInActive: images.MailInActive,
			navigate: () => NavigationServices.navigate('Mail')
		}
	],
};

const tabBottom = createReducer(initialState, {
	['SEARCH_PHONE_OFFLINE'](state, action) {
		return { ...state, customerOffline: action.payload };
	}
});
export default tabBottom;
