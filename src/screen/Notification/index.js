import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Body } from './widget';
import styled from 'styled-components/native'

const Container = styled.View`
    backgroundColor: #2B2E33;
    flex: 1;
`;
export default class index extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Body />
			</Container>
		);
	}
}
