import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Header, Clock, UpComingTask } from './widget';
import ConnectRedux from '@reduxApp/ConnectRedux';
import moment from 'moment';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: moment(),
			isOpenCalendar: false
		};
	}

	onChangeSelectCalendar = async (date) => {
		await this.setState({ date: moment(date.dateString) });
		this.toggleCalendar();
	};

	toggleCalendar = () => {
		const { isOpenCalendar } = this.state;
		this.setState({ isOpenCalendar: !isOpenCalendar });
	};

	render() {
		const { date, isOpenCalendar } = this.state;
		return (
			<React.Fragment>
				<StatusBar backgroundColor="#2B2E33" />
				<Container>
					<Header
						isOpenCalendar={isOpenCalendar}
						date={date}
						onChangeSelectCalendar={this.onChangeSelectCalendar}
						toggleCalendar={this.toggleCalendar}
						{...this.props}
					/>
					<ScrollView showsVerticalScrollIndicator={false}>
						<Clock />
						<UpComingTask />
					</ScrollView>
				</Container>
			</React.Fragment>
		);
	}
}

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
`;

const mapStateToProps = (state) => ({
	tabs: state.tabBottom.data,
	test: state.tabBottom.test,
	testData: state.app.testData
});

export default ConnectRedux(mapStateToProps, Home);
