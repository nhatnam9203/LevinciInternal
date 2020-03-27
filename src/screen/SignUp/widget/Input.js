import React, { Component } from 'react';
import styled from 'styled-components/native';
import { scaleWidth } from '../../../utils';
import Entypo from 'react-native-vector-icons/Entypo';

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
			<WrapInput>
				<InputText
					secureTextEntry={isPassword ? true : false}
					placeholderTextColor="grey"
					placeholder={placeHolder}
					value={value}
					onChangeText={this.onChangeInput}
				/>
				{isPassword && (
					<Touch>
						<Entypo name="eye" color={'#888888'} size={scaleWidth(5.5)} />
					</Touch>
				)}
			</WrapInput>
		);
	}
}
const InputText = styled.TextInput`
	width: ${scaleWidth(80)};
	height: ${scaleWidth(10)};
	background-color: #f8f8f8;
	padding: 10px;
	margin-top: ${scaleWidth(4)};
	border: 1px solid #dddddd;
	border-radius: ${scaleWidth(2)};
	fontSize: ${scaleWidth(4)};
`;

const WrapInput = styled.View`
	justify-content: center;
	align-items: center;
`;

const Touch = styled.TouchableOpacity`
	position: absolute;
	right: ${scaleWidth(2)};
	top: ${scaleWidth(5.7)};
`;
