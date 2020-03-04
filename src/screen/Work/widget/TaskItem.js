import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { scaleWidth, scaleHeight } from '@utils';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyle } from '../../../utils/styles';

export default class TaskItem extends Component {
	render() {
		const { name, LogoText, colorLogoTask, contentTask } = this.props;
		return (
			<View style={styles.item}>
				<Item.Header>
					<Name>{name}</Name>
					<Time>Start: -- : -- AM</Time>
				</Item.Header>

				<Item.Body>
					<LogoTask backgroundColor={colorLogoTask}>
						<LogoTask.Text>{LogoText}</LogoTask.Text>
					</LogoTask>
					<TaskContent>
						<TaskContent.Title>{contentTask}</TaskContent.Title>
						<TaskContent.Time>
							<TextTime>00</TextTime>
							<TextTime>00</TextTime>
							<TextTime>00</TextTime>
						</TaskContent.Time>
					</TaskContent>
					<TouchIcon>
						<AntDesign name="playcircleo" color="white" size={scaleWidth(9)} />
					</TouchIcon>
				</Item.Body>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		borderRadius: 5,
		marginTop: scaleWidth(4),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 9,
		backgroundColor: GlobalStyle.BLACK,
		width: scaleWidth(94),
		marginLeft: scaleWidth(3)
	}
});

const Item = styled.View`
	/* border: 1px solid black; */
	border-radius: 5;
	margin-top: ${scaleWidth(2)};
	box-shadow: 0 20px 50px rgba(0, 0, 0, 1);
`;

Item.Header = styled.View`
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 10px;
	border-bottom-width: 1px;
	border-bottom-color: #1f2124;
`;

Item.Body = styled.View`flex-direction: row;`;

const Time = styled.Text`color: #929395;`;

const LogoTask = styled.View`
	width: ${scaleWidth(12)};
	height: ${scaleWidth(12)};
	border-radius: 50;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.backgroundColor};
	margin-left: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

LogoTask.Text = styled.Text`
	color: white;
	font-size: ${scaleWidth(5)};
`;

const Name = styled.Text`
	color: #dca626;
	font-weight: 600;
`;

const TaskContent = styled.View`
	justify-content: space-between;
	margin-left: ${scaleWidth(2)};
	border-right-width: 1;
	border-right-color: #1f2124;
	padding: 10px;
`;
TaskContent.Title = styled.Text`
	color: white;
	fontWeight: 600;
`;

TaskContent.Time = styled.View`flex-direction: row;`;

const TextTime = styled.Text`
	color: white;
	width: ${scaleWidth(18)};
	font-weight: 600;
	font-size: ${scaleWidth(4)};
`;

const TouchIcon = styled.TouchableOpacity`
	align-self: center;
	flex: 1;
	align-items: center;
`;
