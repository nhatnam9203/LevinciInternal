import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { Header, Body, PopupSearchProject } from './widget';

export default class ProjectDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPopupSearchProject: false
		};
	}

	openPopupSearchProject = () => {
		this.setState({ isPopupSearchProject: true });
	};

	closePopupSearchProject = () => {
		this.setState({ isPopupSearchProject: false });
	};

	render() {
		const { isPopupSearchProject } = this.state;
		return (
			<React.Fragment>
				<StatusBar barStyle={'light-content'} />
				<Container>
					<Header openPopupSearchProject={this.openPopupSearchProject} />
					<Body />
					<PopupSearchProject onPressDone={this.closePopupSearchProject} isVisible={isPopupSearchProject} />
				</Container>
			</React.Fragment>
		);
	}
}

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
`;