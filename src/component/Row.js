import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Row extends Component {
	render() {
		const { style } = this.props;
		return <View style={[ styles.row, style ]}>{this.props.children}</View>;
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative'
	}
});
