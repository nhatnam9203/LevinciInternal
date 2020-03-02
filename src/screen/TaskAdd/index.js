import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Header, Body } from './widget';
import styled from 'styled-components/native';

export default class index extends Component {
	back = () => {
		this.props.navigation.goBack();
	};

	render() {
		return (
			<React.Fragment>
				<StatusBar barStyle="light-content" />
				<Container>
					<Header back={this.back} />
					<Body />
				</Container>
			</React.Fragment>
		);
	}
}

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
`;
