import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import moment from 'moment';

export default class Clock extends Component {
	render() {
		return (
			<Container>
				<Hour>
					<Hour.Text>{moment().format('hh:mm A')}</Hour.Text>
				</Hour>
				<Content>The meeting with client will happen in next 40 min</Content>
			</Container>
		);
	}
}

const Container = styled.View`
	width: ${scaleWidth(100)};
	height: ${scaleHeight(50)};
	backgroundColor: #2b2e33;
	justify-content: center;
	align-items: center;
`;

const Hour = styled.View`
	padding: 7px 12px;
	backgroundColor: #fc1157;
	borderRadius: 20;
`;

Hour.Text = styled.Text`
	color: white;
	fontSize: ${scaleWidth(3.5)};
	fontWeight: 700;
`;

const Content = styled.Text`
	color: #F8F8F8;
	font-size: ${scaleWidth(3.5)};
	width: ${scaleWidth(40)};
	text-align: center;
	marginTop: ${scaleWidth(2.5)};
	letterSpacing: 0.6;
	fontWeight: 600;
`;
