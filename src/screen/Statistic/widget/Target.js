import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Row } from '@component';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Targets extends Component {
	render() {
		const { color, name, hour } = this.props;
		return (
			<React.Fragment>
				<Title>Targets</Title>
				<Row
					style={{
						marginTop: scaleHeight(2)
					}}
				>
					<TouchableOpacity>
						<Feather name="check-square" color={'#63FD30'} size={scaleWidth(7)} />
					</TouchableOpacity>
					<Content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						...
					</Content>
				</Row>

				<Row
					style={{
						marginTop: scaleHeight(2)
					}}
				>
					<TouchableOpacity>
						<AntDesign name="closesquareo" color={'#FC1157'} size={scaleWidth(7)} />
					</TouchableOpacity>
					<Content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						...
					</Content>
				</Row>

				<Row
					style={{
						marginTop: scaleHeight(2)
					}}
				>
					<TouchableOpacity>
						<Feather name="check-square" color={'#63FD30'} size={scaleWidth(7)} />
					</TouchableOpacity>
					<Content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						...
					</Content>
				</Row>

				<Row
					style={{
						marginTop: scaleHeight(2)
					}}
				>
					<TouchableOpacity>
						<Feather name="check-square" color={'#63FD30'} size={scaleWidth(7)} />
					</TouchableOpacity>
					<Content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						...
					</Content>
				</Row>
			</React.Fragment>
		);
	}
}

const Title = styled.Text`
	fontSize: ${scaleWidth(4)};
	color: ${GlobalStyle.WHITE};
	fontWeight: 600;
	marginTop: ${scaleHeight(5)};
`;

const Content = styled.Text`
	marginLeft: ${scaleWidth(2)};
	fontSize: ${scaleWidth(3.5)};
	color: ${GlobalStyle.GREY};
`;
