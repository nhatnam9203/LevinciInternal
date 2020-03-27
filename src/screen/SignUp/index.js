import React, { Component } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '@assets/images';
import { ButtonBack, ButtonSignUp, Input } from './widget';

export default class SignUp extends Component {
	back = () => {
		this.props.navigation.goBack();
	};

	navigateToHome = () => {
		this.props.navigation.navigate('Home');
	};

	render() {
		return (
			<Container>

				<Header>
					<Entypo name="star-outlined" color={'white'} size={scaleWidth(5)} />
					<Row>
						<Entypo name="lock" color={'white'} size={scaleWidth(5)} />
						<P>levincigroup.com/signup?</P>
					</Row>
					<AntDesign name="reload1" color={'white'} size={scaleWidth(5)} />
				</Header>

				<Body>
					<LogoLevinci source={images.LogoLevinci} resizeMode="contain" />
					<Title>Sign up for your account</Title>
					<Input placeHolder="Email address" />
					<Input isPassword placeHolder="Password" />
					<Input isPassword placeHolder="Confirm Password" />
					<Note>
						By signing up, you confirm that you've read and accepted our User Notice and Privacy Policy
					</Note>
					<ButtonSignUp onPress={this.navigateToHome} />
					<ButtonBack onPress={this.back} />
				</Body>
				
			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	backgroundColor: white;
`;

const Header = styled.View`
	background-color: #231f20;
	height: ${scaleHeight(10)};
	width: ${scaleWidth(100)};
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	padding: 10px;
`;

const P = styled.Text`
	color: white;
	marginLeft: ${scaleWidth(2)};
`;

const Row = styled.View`
	flex-direction: row;
	align-items: center;
`;

const Body = styled.View`
	flex: 1;
	align-items: center;
	padding-bottom: ${scaleWidth(10)};
`;

const Title = styled.Text`
	color: #333;
	fontSize: ${scaleWidth(3.5)};
	fontWeight: 600;
`;

const Note = styled.Text`
	width: ${scaleWidth(80)};
	margin-top: ${scaleWidth(7)};
	margin-bottom: ${scaleWidth(7)};
	fontSize: ${scaleWidth(3.5)}px;
`;

const LogoLevinci = styled.Image`width: ${scaleWidth(30)};`;
