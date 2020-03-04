import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Row extends Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={[ styles.touch, this.props.styles ]}>
				{this.props.children}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	touch: {
		flexDirection: 'row',
		alignItems: 'center',
        position: 'relative',
        paddingBottom : 20
	}
});
