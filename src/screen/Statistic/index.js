import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Body } from './widget';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
`;

export default class Statistic extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Body />
			</Container>
		);
	}
}
