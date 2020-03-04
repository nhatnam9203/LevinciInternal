import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import TaskItem from './TaskItem';

export default class UpComingTask extends Component {
	render() {
		return (
			<Container>
				<Title>Upcoming tasks</Title>
				<Scroll showsVerticalScrollIndicator={false}>
					<TaskItem
						name="HarmonyPay"
						LogoText={'HP'}
						colorLogoTask={'#F28A77'}
						contentTask={'HCA- Design payment'}
					/>
                    <TaskItem
						name="HarmonyPay"
						LogoText={'HP'}
						colorLogoTask={'#F28A77'}
						contentTask={'HCA- Design payment'}
					/>
                    <TaskItem
						name="HarmonyPay"
						LogoText={'HP'}
						colorLogoTask={'#F28A77'}
						contentTask={'HCA- Design payment'}
					/>
                    <View height={scaleHeight(20)} />
				</Scroll>
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
`;

const Scroll = styled.ScrollView``;
