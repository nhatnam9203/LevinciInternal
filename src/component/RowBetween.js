import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class RowBetween extends Component {
	render() {
		const { alignCenter } = this.props;
		return (
			<View
				style={[
					styles.row,
					this.props.style,
					{
						alignItems: alignCenter ? 'center' : 'baseline'
					}
				]}
			>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'relative'
	}
});
