import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { scaleWidth } from '../../../utils';

export default class buttonSignUp extends Component {
	render() {
        const {onPress} = this.props;
		return (
			<TouchableRipple onPress={onPress} rippleColor="yellow" style={styles.button}>
				<Text style={styles.text}>SIGN UP</Text>
			</TouchableRipple>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#EBB028',
		width: scaleWidth(80),
		height: scaleWidth(10),
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5
	},
	text: {
		color: 'white',
		fontSize: scaleWidth(3.7),
		fontWeight: 'bold',
		letterSpacing: 0.1
	}
});
