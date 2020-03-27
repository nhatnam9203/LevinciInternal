import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import images from '@assets/images';

export default class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<InputMessage placeholderTextColor={GlobalStyle.GREY} placeholder="Type a comment" />
				<TouchSubmitMessage>
					<ImageSubmitMessage source={images.Fly} />
				</TouchSubmitMessage>
			</React.Fragment>
		);
	}
}


const InputMessage = styled.TextInput`
	width: ${scaleWidth(100)};
	fontSize: ${scaleWidth(3.5)};
	padding: ${scaleWidth(5)}px;
	backgroundColor: #1f2023;
	color: ${GlobalStyle.GREY};
	position: absolute;
	bottom: 0px;
	right: 0px;
	left: 0px;
	font-style: italic;
`;

const TouchSubmitMessage = styled.TouchableOpacity`
	position: absolute;
	bottom: ${scaleWidth(5)}px;
	right: ${scaleWidth(5)}px;
`;

const ImageSubmitMessage = styled.Image`
	width: ${scaleWidth(5)};
	height: ${scaleWidth(5)};
`;
