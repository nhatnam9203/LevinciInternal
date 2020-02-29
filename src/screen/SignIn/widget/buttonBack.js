import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { scaleWidth,scaleHeight } from '../../../utils';

export default class buttonBack extends Component {
	render() {
		const { onPress } = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					position: 'absolute',
					left: scaleWidth(5),
					top: scaleHeight(5),
                    zIndex : 99999
				}}
			>
				<Feather name="arrow-left" color="#EBB028" size={scaleWidth(7)} />
			</TouchableOpacity>
		);
	}
}
