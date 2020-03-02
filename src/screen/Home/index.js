import React, { Component } from 'react';
import { Text, View, StatusBar ,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { Header, Clock, UpComingTask } from './widget';
import ConnectRedux from '@reduxApp/ConnectRedux'

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<StatusBar hidden={true} />
				<Container>
					<Header />
					<Clock />
					<UpComingTask />
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
	tabs : state.tabBottom.data,
	test : state.tabBottom.test,
	testData : state.app.testData
})


export default ConnectRedux(mapStateToProps,Home);