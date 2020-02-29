import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { scaleWidth } from '../../../utils';

export default class buttonBack extends Component {
	render() {
		const { onPress } = this.props;
		return (
			<TouchableOpacity onPress={onPress} style={styles.button}>
				<Feather name="arrow-left" color={'#3D90ED'} size={scaleWidth(6)} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		left: scaleWidth(48),
		bottom: scaleWidth(9),
		shadowColor: 'rgba(0,0,0,0.3)',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		width: scaleWidth(10),
		height: scaleWidth(10),
		backgroundColor: 'white',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
