import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { RowBetween } from '@component';
import images from '@assets/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationServices from '@navigator/NavigationServices';

export default class TaskList extends Component {

	navigateToAddTask = () => {
		NavigationServices.navigate('TaskAdd');
	};

	navigateToTaskDetail=()=>{
		NavigationServices.navigate('TaskDetail');
	}

	checkPriority = (task) => {
		let color = '#2B2E33';
		switch (task.priority) {
			case 'low':
				color = '#1161FB';
				break;
			case 'normal':
				color = '#22C7FC';
				break;
			case 'medium':
				color = '#63FD30';
				break;
			case 'medium':
				color = '#63FD30';
				break;
			case 'high':
				color = '#FEC52E';
				break;
			case 'important':
				color = '#FEC52E';
				break;
			case 'immidiate':
				color = '#FC0D1B';
				break;

			default:
				break;
		}

		return { color };
	};

	renderTasks() {
		const { data } = this.props;
		return data.map((task, index) => {
			return (
				<Item onPress={this.navigateToTaskDetail} LeftColor={() => this.checkPriority(task).color} key={index}>
					<RowBetween>
						<Text style={styles.taskTitle}>{task.title}</Text>
						<Text style={styles.status}>{task.status}</Text>
					</RowBetween>
					<Text style={styles.description}>{task.description}</Text>
					<RowBetween>
						<Avatar source={images.DefaultAvatar} />
						<Time>Remaining time</Time>
					</RowBetween>
				</Item>
			);
		});
	}

	render() {
		const { state, data } = this.props;
		return (
			<View style={{ flex: 1, padding: 15 }}>
			
				<Header>
					<Text style={styles.txtHeader}>{state}</Text>
					<Text style={styles.txtHeaderQtity}>{data.length}</Text>
				</Header>

				<ScrollView style={{ padding: 5 }} showsVerticalScrollIndicator={false}>
					{this.renderTasks()}
					<AddTask onPress={this.navigateToAddTask}>
						<FontAwesome name="plus" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
						<Text style={[ styles.txtAddTask, styles.left ]}>Add task</Text>
					</AddTask>
					<View style={{ height: scaleHeight(20) }} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	txtHeader: {
		color: GlobalStyle.YELLOW,
		fontWeight: '600',
		fontSize: scaleWidth(4)
	},
	txtHeaderQtity: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(4),
		marginLeft: scaleWidth(3.5)
	},
	taskTitle: {
		color: GlobalStyle.WHITE,
		fontWeight: '600',
		fontSize: scaleWidth(3.5)
	},
	status: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(4),
		position: 'absolute',
		right: 0,
		top: 0
	},
	description: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(3.5),
		marginVertical: scaleHeight(2)
	},
	txtAddTask: {
		fontSize: scaleWidth(4),
		color: GlobalStyle.YELLOW,
		fontWeight: '600'
	},
	left: {
		marginLeft: scaleWidth(2)
	}
});

const Header = styled.View`
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.2);
	padding: 15px;
	flexDirection: row;
	borderRadius: 5px;
`;

const AddTask = styled.TouchableOpacity`
	width: 100%;
	border: 0.9px solid rgba(0, 0, 0, 0.2);
	padding: 15px;
	flexDirection: row;
	borderRadius: 5px;
	marginTop: ${scaleHeight(2)};
	/* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4); */
`;

const Item = styled.TouchableOpacity`
	padding: 15px;
	borderLeftWidth: 12px;
	borderLeftColor: ${(props) => props.LeftColor};
	marginTop: ${scaleHeight(1)};
	borderRadius: 5px;
	backgroundColor: #2b2e33;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.Image`
	width: ${scaleWidth(12)};
	height: ${scaleWidth(12)};
	borderRadius: 50px;
	border: 1px solid white;
`;

const Time = styled.Text`
	color: ${GlobalStyle.YELLOW};
	font-size: ${scaleWidth(3.5)};
	position: absolute;
	bottom: 0px;
	right: 0px;
`;
