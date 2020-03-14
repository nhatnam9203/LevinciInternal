import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyle } from '@utils/styles';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { RowBetween } from '@component';
import { Switch } from 'react-native-paper';

export default class General extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowNotification: false
		};
	}

	render() {
		const { isShowNotification } = this.state;
		return (
			<React.Fragment>
				<Text style={styles.title}>Advanced</Text>
				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Show Notifications</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>
				<Text style={styles.when}>Notification when : </Text>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>New task assigned</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>New Comments</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Status change</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Upcoming estimate</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Out of estimate</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>

				<RowBetween alignCenter style={styles.row}>
					<Text style={styles.content}>Show Notifications</Text>
					<Switch
						color={GlobalStyle.YELLOW}
						value={isShowNotification}
						onValueChange={(value) => this.setState({ isShowNotification: value })}
						style={{
							color: GlobalStyle.YELLOW,
						}}
					/>
				</RowBetween>

				<View style={{
					borderBottomWidth : 1,
					borderBottomColor : 'grey',
					width : '100%',
					marginTop: scaleHeight(4)
				}} />
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
		fontSize: scaleWidth(3.5)
	},
	row: {
		marginTop: scaleHeight(2)
	},
	when : {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(3.5),
		marginTop: scaleHeight(2)
	}
});
