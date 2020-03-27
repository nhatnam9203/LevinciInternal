import React, { Component } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import moment from 'moment';
import { GlobalStyle } from '@utils/styles';
import { slop } from '@utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pie from 'react-native-pie';
import ProjectItem from './ProjectItem';
import Target from './Target'
import Evulation from './Evulation'

export default class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: moment(),
			value: [ 5, 5, 5, 5 ]
		};
	}

	onUpdate = (value) => {
		this.setState({
			value
		});
	};

	plusWeek = () => {
		const { time } = this.state;
		this.setState({
			time: moment(time).subtract(1, 'weeks')
		});
	};

	minusWeek = () => {
		const { time } = this.state;
		this.setState({
			time: moment(time).add(1, 'weeks')
		});
	};

	renderChart() {
		return (
			<Pie
				radius={scaleWidth(28)}
				innerRadius={scaleWidth(20)}
				sections={[
					{
						percentage: 30,
						color: '#FC1157'
					},
					{
						percentage: 30,
						color: '#F28A77'
					},
					{
						percentage: 40,
						color: '#22C7FC'
					}
				]}
				dividerSize={0}
				strokeCap={'butt'}
			/>
		);
	}

	renderProject() {
		return (
			<React.Fragment>
				<ProjectItem color="#F28A77" name="HarmonyPay" hour="15 h" />
				<ProjectItem color="#22C7FC" name="Popeyes" hour="12h h" />
				<ProjectItem color="#FC1157" name="Buger King" hour="8 h" />
			</React.Fragment>
		);
	}

	render() {
		const { time } = this.state;
		const end = moment(time).add(1, 'weeks');
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text style={styles.title}>Report by week</Text>
					<Time>
						<TouchableOpacity onPress={this.minusWeek} hitSlop={slop}>
							<FontAwesome name="caret-left" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
						</TouchableOpacity>

						<Text style={styles.time}>
							{`${moment(time).format('DD MMMM, YYYY')} - ${moment(end).format('DD MMMM, YYYY')}`}
						</Text>

						<TouchableOpacity onPress={this.plusWeek} hitSlop={slop}>
							<FontAwesome name="caret-right" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
						</TouchableOpacity>
					</Time>

					<RowBetween>
						<Column hour={3} day={'07'} dayName={'Mon'} />
						<Column hour={7} day={'08'} dayName={'Tue'} />
						<Column hour={12} day={'09'} dayName={'Wed'} />
						<Column hour={11} day={'10'} dayName={'Thu'} />
						<Column hour={6} day={'11'} dayName={'Fri'} />
						<Column hour={3} day={'12'} dayName={'Sat'} />
						<Column hour={0} day={'13'} dayName={'Sun'} />
					</RowBetween>

					<View style={styles.pieChart}>
						{this.renderChart()}
						<View style={styles.piece}>
							<Text style={styles.total}>Total</Text>
							<Text style={styles.hourPie}>35 hours</Text>
							<View
								style={{
									flexDirection: 'row'
								}}
							>
								<Ionicons name="ios-trending-up" color={'#75f549'} size={scaleWidth(5)} />
								<Text style={styles.percent}>5 %</Text>
							</View>
						</View>
					</View>

					{this.renderProject()}

					<Target />
					<Evulation />
				</ScrollView>
			</Container>
		);
	}
}

const Column = ({ hour, day, dayName }) => {
	return (
		<View
			style={{
				alignContent: 'flex-end'
			}}
		>
			<Text style={styles.hour}>{hour}</Text>
			<View
				style={{
					width: scaleWidth(7),
					backgroundColor: '#EBB028',
					height: hour === 0 ? 2 : scaleWidth(3) * hour
				}}
			/>
			<Text style={styles.day}>{day}</Text>
			<Text style={styles.day}>{dayName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: scaleWidth(4)
	},
	time: {
		color: GlobalStyle.YELLOW,
		fontSize: scaleWidth(3.5)
	},
	chart: {
		alignItems: 'flex-end'
	},
	hour: {
		color: '#ffffff',
		textAlign: 'center',
		marginBottom: 5
	},
	day: {
		color: '#ffffff',
		textAlign: 'center',
		marginTop: 5,
		fontSize: scaleWidth(3)
	},
	pieChart: {
		marginTop: scaleHeight(5),
		backgroundColor: '#2B2E33',
		borderRadius: scaleWidth(40),
		width: scaleWidth(62),
		padding: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		alignSelf: 'center',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center'
	},
	piece: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		paddingVertical: scaleWidth(18),
		justifyContent: 'space-between'
	},
	total: {
		color: GlobalStyle.WHITE,
		fontSize: scaleWidth(4)
	},
	hourPie: {
		color: GlobalStyle.YELLOW,
		fontWeight: '600',
		fontSize: scaleWidth(6)
	},
	percent: {
		color: '#ffffff',
		fontSize: scaleWidth(3.5),
		marginLeft: scaleWidth(2)
	}
});

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
	padding: 15px;
`;

const Time = styled.TouchableOpacity`
	width: 100%;
	borderRadius: ${scaleWidth(5)}px;
	backgroundColor: #1f2023;
	marginTop: ${scaleHeight(2)};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${scaleWidth(2)}px ${scaleWidth(2.5)}px;
`;

const RowBetween = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	marginTop: ${scaleHeight(3)};
`;
