import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Row } from '@component';
import Modal from '@component/Modal';
import images from '@assets/images';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight, slop } from '@utils';
import { GlobalStyle } from '@utils/styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ScheduleNotification extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAllDay: false,
			isTheseHour: false
		};
	}

	setAllDay = () => {
		this.setState({
			isAllDay: true,
			isTheseHour: false
		});
	};

	setTheseHour = () => {
		this.setState({
			isAllDay: false,
			isTheseHour: true
		});
	};

	closeSchedule = () => {
		this.props.toggleSchedule();
	};

	renderDuringTheseHour() {
		const { isTheseHour } = this.state;
		return (
			<Row style={styles.row}>

				<TouchableOpacity hitSlop={slop} style={styles.checkBox} onPress={this.setTheseHour}>
					{!isTheseHour && <Feather name="square" color={'#ffffff'} size={scaleWidth(5)} />}
					{isTheseHour && <AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />}
				</TouchableOpacity>

				<View style={styles.left}>
					<Text style={styles.allday}>During these hour</Text>
					{isTheseHour && (
						<Row style={{ marginTop: scaleHeight(2) }}>
							<View>
								<Text style={styles.start}>Start</Text>
								<TouchableOpacity style={styles.item}>
									<Text style={styles.time}>09:00</Text>
									<FontAwesome name="caret-down" color={GlobalStyle.GREY} size={scaleWidth(5)} />
								</TouchableOpacity>
							</View>

							<View style={{ marginLeft: scaleWidth(8) }}>
								<Text style={styles.start}>End</Text>
								<TouchableOpacity style={styles.item}>
									<Text style={styles.time}>09:00</Text>
									<FontAwesome name="caret-down" color={GlobalStyle.GREY} size={scaleWidth(5)} />
								</TouchableOpacity>
							</View>
						</Row>
					)}
				</View>
			</Row>
		);
	}

	render() {
		const { isVisible } = this.props;
		const { isAllDay } = this.state;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>

					<Header>
						<Row>
							<TouchableOpacity hitSlop={slop} onPress={this.closeSchedule}>
								<ArrowLeft source={images.ArrowLeft} />
							</TouchableOpacity>
							<Text style={styles.title}>Schedule Notification</Text>
						</Row>
					</Header>

					<Body>
						<Text style={styles.when}>Allow Popup Notification in</Text>
						<Row style={styles.row}>
							<TouchableOpacity hitSlop={slop} style={styles.checkBox} onPress={this.setAllDay}>
								{!isAllDay && <Feather name="square" color={'#ffffff'} size={scaleWidth(5)} />}
								{isAllDay && (
									<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
								)}
							</TouchableOpacity>
							<Text style={styles.allday1}>All day</Text>
						</Row>
						{this.renderDuringTheseHour()}
					</Body>
					
				</Container>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: scaleWidth(5),
		fontWeight: '600',
		color: GlobalStyle.WHITE,
		marginLeft: scaleWidth(3)
	},
	when: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(3.5)
	},
	allday: {
		fontSize: scaleWidth(3.5),
		color: '#ffffff'
	},
	allday1: {
		fontSize: scaleWidth(3.5),
		color: '#ffffff',
		marginLeft: scaleWidth(2)
	},
	theseHour: {},
	row: {
		marginTop: scaleHeight(4),
		alignItems: 'flex-start'
	},
	start: {
		color: GlobalStyle.GREY
	},
	item: {
		marginTop: scaleHeight(2),
		width: scaleWidth(27),
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: GlobalStyle.GREY,
		borderBottomWidth: 1,
		paddingBottom: scaleHeight(0.5)
	},
	time: {
		color: GlobalStyle.GREY
	},
	checkBox: {
		marginTop: -scaleWidth(0.4)
	},
	left: {
		marginLeft: scaleWidth(2)
	}
});

const Container = styled.View`
	width: ${scaleWidth(100)};
	height: ${scaleHeight(100)};
	backgroundColor: #2b2e33;
`;

const Body = styled.View`
	padding: 15px;
	paddingTop: ${scaleHeight(3)}px;
	flex: 1;
	backgroundColor: #2b2e33;
`;

const Header = styled.View`
	height: ${scaleHeight(12)};
	width: ${scaleWidth(100)};
	padding-top: ${scaleHeight(8)};
	paddingLeft: ${scaleWidth(3)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
`;

const ArrowLeft = styled.Image`
	width: ${scaleWidth(6)};
	height: ${scaleWidth(6)};
`;
