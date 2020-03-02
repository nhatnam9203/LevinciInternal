import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import { Header,Body } from './widget';

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
`;

export default class Setting extends Component {
	render() {
		return (
			<React.Fragment>
				<StatusBar barStyle={'light-content'} />
				<Container>
					<Header />
                    <Body />
				</Container>
			</React.Fragment>
		);
	}
}
