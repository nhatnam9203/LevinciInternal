import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyle } from '@utils/styles';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { RowBetween } from '@component';
import { Switch } from 'react-native-paper';

export default class Advanced extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowNotification: false
		};
	}

	toggleSchedule=()=>{
		this.props.toggleSchedule();
	}

	render() {
		const { isShowNotification } = this.state;
		return (
			<React.Fragment>
				<Text style={styles.title}>General</Text>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>
						Allow notification when location change during working on task time
					</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Allow notification when receive public notification in box</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Connect with your watch</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Allow popup notification in </Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW
						}}
					/>
				</RowBetween>

				<TouchableOpacity onPress={this.toggleSchedule} style={{marginTop: scaleHeight(2)}}>
					<Text style={styles.hint}>All day</Text>
				</TouchableOpacity>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		color: GlobalStyle.YELLOW,
		fontWeight: '600',
		fontSize: scaleWidth(4),
		marginTop: scaleHeight(2)
	},
	content: {
		color: GlobalStyle.WHITE,
		fontWeight: '600',
		fontSize: scaleWidth(3.5),
		width: scaleWidth(70)
	},
	row: {
		marginTop: scaleHeight(2)
	},
	when: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(3.5),
		marginTop: scaleHeight(2)
	},
	hint: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(3.5)
	}
});
