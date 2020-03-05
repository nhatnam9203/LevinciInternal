import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import TaskItem from './TaskItem';

export default class UpComingTask extends Component {
	render() {
		return (
			<Container>
				<Title>Current tasks</Title>
				<TaskItem
					name="HarmonyPay"
					LogoText={'HP'}
					colorLogoTask={'#F28A77'}
					contentTask={'HCA - Coding'}
				/>

				<Title>Upcoming tasks</Title>
				<TaskItem
					name="Popeyes"
					LogoText={'PE'}
					colorLogoTask={'#22C7FC'}
					contentTask={'HCA - Task 201'}
				/>
				<TaskItem
					name="HarmonyPay"
					LogoText={'HP'}
					colorLogoTask={'#F28A77'}
					contentTask={'HCA - Task 01'}
				/>
				<Title>Completed tasks</Title>
				<TaskItem
					name="HarmonyPay"
					LogoText={'HP'}
					colorLogoTask={'#F28A77'}
					contentTask={'HCA - Task 1000000'}
				/>

			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
`;

const Title = styled.Text`
	color: white;
	fontWeight: 600;
	fontSize: ${scaleWidth(4)};
	marginLeft: ${scaleWidth(3)};
	margin-top: ${scaleWidth(5)};
`;

const Scroll = styled.ScrollView``;
