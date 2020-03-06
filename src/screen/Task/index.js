import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import { Header, AllProjects, RecentProjects } from './widget';

export default class index extends Component {
	render() {
		return (
			<React.Fragment>
				<StatusBar barStyle='light-content' />
				<Container>
					<Header />
					<View
						style={{
							paddingHorizontal: scaleWidth(3)
						}}
					>
						<ScrollView showsVerticalScrollIndicator={false}>
							<RecentProjects />
							<AllProjects />
							<View style={{ height: scaleHeight(20) }} />
						</ScrollView>
					</View>
				</Container>
			</React.Fragment>
		);
	}
}

const Container = styled.View`
	flex: 1;
	background-color: ${GlobalStyle.BLACK};
`;
