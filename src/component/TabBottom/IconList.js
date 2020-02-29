import images from '@assets/images';
import NavigationServices from '@navigator/NavigationServices';
export const iconList = [
	{
		key: 0,
		name: 'Calendar',
		Icon: images.Calendar,
		IconInActive: images.CalendarInActive,
		navigate: () => NavigationServices.navigate('Calendar')
	},
	{
		key: 1,
		name: 'Statistic',
		Icon: images.Statistic,
        IconInActive: images.StatisticInActive,
        navigate: () => NavigationServices.navigate('Statistic')
	},
	{
		key: 2,
		name: 'Mail',
		Icon: images.Mail,
        IconInActive: images.MailInActive,
        navigate: () => NavigationServices.navigate('Mail')
	},
	{
		key: 3,
		name: 'Task',
		Icon: images.Task,
        IconInActive: images.TaskInActive,
        navigate: () => NavigationServices.navigate('Task')
	},
	{
		key: 4,
		name: 'Work',
		Icon: images.Work,
        IconInActive: images.WorkInActive,
        navigate: () => NavigationServices.navigate('Work')
	},
	{
		key: 5,
		name: 'Account',
		Icon: images.Account,
        IconInActive: images.AccountInActive,
        navigate: () => NavigationServices.navigate('Account')
	},
	{
		key: 6,
		name: '',
		Icon: '',
        IconInActive: '',
        navigate: () => {}
	},
	{
		key: 7,
		name: 'Salary',
		Icon: images.Salary,
        IconInActive: images.SalaryInActive,
        navigate: () => NavigationServices.navigate('Salary')
	},
	{
		key: 8,
		name: 'Setting',
		Icon: images.Setting,
		IconInActive: images.SettingInActive,
		navigate: () => NavigationServices.navigate('Setting')
	}
];
