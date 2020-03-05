import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth } from '@utils';
import NavigationServices from '@navigator/NavigationServices';

export default class Body extends Component {
	logout = () => {
		NavigationServices.navigate('Auth');
	};

	render() {
		return (
			<Container>
				<Item isBottom>
					<Text style={styles.title}>Notifications</Text>
					<Text style={styles.content}>Open System Settings</Text>
				</Item>
				<Item isBottom>
					<Text style={styles.title}>Language</Text>
					<Text style={styles.content}>English</Text>
				</Item>
				<Item isBottom>
					<Text style={styles.title}>Notifications</Text>
					<Text style={styles.content}>End user agreement</Text>
					<Text style={styles.content}>Privacy Policy</Text>
				</Item>
				<Item>
					<Text style={styles.title}>Account</Text>
					<TouchableOpacity onPress={this.logout}>
						<Text style={styles.content}>Logout</Text>
					</TouchableOpacity>
				</Item>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: scaleWidth(4),
		marginTop: scaleWidth(6)
	},
	content: {
		marginTop: scaleWidth(6),
		fontSize: scaleWidth(4),
		color: '#c8c9cc'
	}
});

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
	padding: 15px;
`;

const Item = styled.View`
	borderBottomWidth: ${(props) => (props.isBottom ? '1px' : '0px')};
	borderBottomColor: grey;
	paddingBottom: ${scaleWidth(6)};
`;
