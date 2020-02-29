import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth } from '../../../utils';
import Entypo from 'react-native-vector-icons/Entypo';

const InputText = styled.TextInput`
	width: ${scaleWidth(80)};
	height: ${scaleWidth(10)};
	backgroundColor: transparent;
	padding: 10px;
	marginTop: ${scaleWidth(4)};
	border: 1px solid #EBB028;
	borderRadius: 20;
    color: white;
`;

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	onChangeInput = (value) => {
		this.setState({ value });
	};

	render() {
		const { value } = this.state;
		const { placeHolder, isPassword } = this.props;
		return (
			<View
				style={{
                    justifyContent : 'center',
                    alignItems : 'center'
				}}
			>
				<InputText
					secureTextEntry={isPassword ? true : false}
					placeholderTextColor="grey"
					placeholder={placeHolder}
					value={value}
					onChangeText={this.onChangeInput}
				/>
				<TouchableOpacity style={{
                    position : 'absolute',
                    right: scaleWidth(2),
                    top: scaleWidth(5.7)
                }}>
					{isPassword&&<Entypo name="eye" color={'#888888'} size={scaleWidth(5.5)} />}
				</TouchableOpacity>
			</View>
		);
	}
}
