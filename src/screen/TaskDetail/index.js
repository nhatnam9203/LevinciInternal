import React, { Component } from 'react';
import { Header, Body } from './widget';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export default class index extends Component {
	render() {
		return (
			<React.Fragment>
				<StatusBar backgroundColor="#2B2E33" />
				<Container>
					<Header />
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
