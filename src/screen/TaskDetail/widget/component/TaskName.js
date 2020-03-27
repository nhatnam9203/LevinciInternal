import React, { Component } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import { Row, RowBetween } from '@component';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class TaskName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			oldTaskName: 'HCA - Design payment',
			taskName: 'HCA - Design payment',
			taskNameEdit: '',
			isEditTaskName: false
		};
	}

	toggleEditTaskName = () => {
		const { isEditTaskName } = this.state;
		this.setState({ isEditTaskName: !isEditTaskName });
	};

	cancelTaskName = () => {
		const { oldTaskName } = this.state;
		this.setState({
			taskName: oldTaskName
		});
	};

	saveTaskName = () => {
		const { taskName } = this.state;
		this.setState({
			oldTaskName: taskName
		});
	};

	onChangeTaskName = (taskName) => {
		this.setState({ taskName });
	};

	clearTaskName = () => {
		this.setState({ taskName: '' });
	};

	render() {
		const { taskName, isEditTaskName } = this.state;
		return (
			<RowBetween style={{ marginTop: scaleHeight(2), position: 'relative' }}>
				<TextInput
					placeholderTextColor={'white'}
					onChangeText={this.onChangeTaskName}
					value={taskName}
					onFocus={() => this.setState({ isEditTaskName: true })}
					style={[ styles.inputTaskName, isEditTaskName ? styles.inputEdit : '' ]}
				/>

				{isEditTaskName && (
					<React.Fragment>
						<TouchableOpacity onPress={this.clearTaskName} style={styles.btnClose}>
							<AntDesign name="closecircle" color={GlobalStyle.GREY} size={scaleWidth(5)} />
						</TouchableOpacity>

						<Row style={styles.bottomEditTaskName}>
							<TouchableOpacity
								onPress={() => {
									this.toggleEditTaskName();
									this.cancelTaskName();
								}}
							>
								<Text style={styles.cancel}>CANCEL</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => {
									this.toggleEditTaskName();
									this.saveTaskName();
								}}
							>
								<Text style={styles.save}>SAVE</Text>
							</TouchableOpacity>
						</Row>
					</React.Fragment>
				)}
			</RowBetween>
		);
	}
}

const styles = StyleSheet.create({
	inputTaskName: {
		backgroundColor: 'transparent',
		paddingBottom: scaleHeight(1),
		fontWeight: '600',
		fontSize: scaleWidth(5),
		marginTop: scaleHeight(2),
		color: 'white',
		flex: 1
	},
	inputEdit: {
		borderBottomWidth: 1,
		borderBottomColor: GlobalStyle.GREY
	},
	cancel: {
		fontSize: scaleWidth(3.5),
		color: GlobalStyle.GREY,
		marginRight: scaleWidth(2)
	},
	save: {
		fontSize: scaleWidth(3.5),
		color: '#50c6fa',
		marginRight: scaleWidth(2)
	},
	bottomEditTaskName: {
		position: 'absolute',
		right: 0,
		bottom: -scaleHeight(3)
	}
});
