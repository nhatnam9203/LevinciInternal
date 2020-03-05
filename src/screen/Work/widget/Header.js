import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import { scaleWidth, scaleHeight } from '@utils';
import NavigationServices from '@navigator/NavigationServices';
import { Calendar } from 'react-native-calendars';
import { GlobalStyle } from '@utils/styles';

export default class Header extends Component {
	navigateToSetting = () => {
		NavigationServices.navigate('Setting');
	};

	selectDay = (date) => {
		this.props.onChangeSelectCalendar(date);
	};

	renderCalendar() {
		const { date } = this.props;
		const selectedDay = moment(date).format('YYYY-MM-DD').toString();
		return (
			<View style={styles.calendar}>
				<Calendar
					current={moment(date).format('YYYY-MM-DD')}
					onDayPress={(day) => this.selectDay(day)}
					monthFormat={'MMMM yyyy'}
					firstDay={1}
					hideDayNames={false}
					onPressArrowLeft={(substractMonth) => substractMonth()}
					onPressArrowRight={(addMonth) => addMonth()}
					markedDates={{
						[selectedDay]: { selected: true }
					}}
					theme={theme}
				/>
			</View>
		);
	}

	toggleCalendar = () => {
		this.props.toggleCalendar();
	};

	render() {
		const { isOpenCalendar } = this.props;
		return (
			<Container>
				<TouchIcon>
					<Icon name="calendar-alt" color={'white'} size={scaleWidth(5)} />
				</TouchIcon>

				<Row onPress={this.toggleCalendar}>
					<Title>{`${moment().format('dddd')} , ${moment().format('DD/MM/YYYY')}`}</Title>
					<IonicIcon
						style={{
							marginLeft: 7
						}}
						name={isOpenCalendar ? 'md-arrow-dropup' : 'md-arrow-dropdown'}
						color="white"
						size={scaleWidth(5)}
					/>
				</Row>

				<TouchSetting onPress={this.navigateToSetting} hitSlop={{ top: 20, right: 20, left: 20, bottom: 20 }}>
					<IonicIcon name={'ios-settings'} color="white" size={scaleWidth(4.5)} />
				</TouchSetting>

				{isOpenCalendar && this.renderCalendar()}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	calendar: {
		position: 'absolute',
		top: scaleHeight(13),
		width: scaleWidth(100),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,

		elevation: 5
	}
});

const theme = {
	arrowColor: GlobalStyle.YELLOW,
	'stylesheet.calendar.header': {
		header: {
			backgroundColor: '#1F2023',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingVertical: 4,
			borderRadius: 20,
			marginHorizontal: 12,
			paddingHorizontal: scaleWidth(4)
		},
		monthText: {
			color: '#fff',
			fontWeight: '700',
			fontSize: 16
		},
		dayHeader: {
			marginTop: 2,
			marginBottom: 7,
			width: 30,
			textAlign: 'center',
			fontSize: 14,
			color: '#fff'
		}
	},
	backgroundColor: '#2B2E33',
	calendarBackground: '#2B2E33',
	selectedDayBackgroundColor: 'transparent',
	selectedDayTextColor: GlobalStyle.YELLOW,
	todayTextColor: '#00adf5',
	dayTextColor: '#ffffff',
	textDisabledColor: 'grey',
	textDayFontWeight: '500'
};

const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: ${scaleHeight(12)};
	width: ${scaleWidth(100)};
	padding-top: ${scaleHeight(7)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
	padding-left: ${scaleWidth(3)};
	padding-right: ${scaleWidth(3)};
`;

const Title = styled.Text`
	fontSize: ${scaleWidth(4)};
	color: white;
	font-weight: bold;
`;
const Row = styled.TouchableOpacity`flex-direction: row;`;

const TouchSetting = styled.TouchableOpacity`marginTop: 4;`;

const TouchIcon = styled.TouchableOpacity`marginBottom: 4;`;
