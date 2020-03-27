import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import General from './General';
import Advanced from './Advanced';
import ScheduleNotification from './ScheduleNotification';

export default class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisibile: false
		};
	}

	toggleSchedule = () => {
		const { isVisibile } = this.state;
		this.setState({ isVisibile: !isVisibile });
	};

	render() {
		const { isVisibile } = this.state;
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<General />
					<Advanced toggleSchedule={this.toggleSchedule} />
				</ScrollView>
				<ScheduleNotification toggleSchedule={this.toggleSchedule} isVisible={isVisibile} />
			</Container>
		);
	}
}

const Container = styled.View`
	padding: 15px;
	backgroundColor: #2b2e33;
	flex: 1;
`;