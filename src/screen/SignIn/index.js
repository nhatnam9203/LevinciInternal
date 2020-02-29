import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '../../utils';
import images from '../../assets/images';
import Input from './widget/Input';
import ButtonSignIn from './widget/buttonSignIn';
import ButtonBack from './widget/buttonBack';

const Container = styled.ImageBackground`
	flex: 1;
	backgroundColor: rgba(0, 0, 0, 0.5);
`;

const Title = styled.Text`
	color: #ffffff;
	fontSize: ${scaleWidth(7)};
	fontWeight: bold;
`;

const Title2 = styled(Title)`
    fontSize: ${scaleWidth(12)};
`;

const Paragraph = styled.Text`
	fontSize: ${scaleWidth(3)};
	marginTop: ${scaleWidth(8)};
	marginBottom: ${scaleWidth(8)};
	color: #ffffff;
	fontSize: ${scaleWidth(3)};
`;

const Note = styled(Paragraph)`
    width: ${scaleWidth(45)};
    textAlign: center;
`;


export default class Auth extends Component {
	navigateToHome = () => {
		this.props.navigation.navigate('Home');
	};

	navigateToSignIn = () => {
		this.props.navigation.navigate('SignIn');
	};

	navigateToSignUp = () => {
		this.props.navigation.navigate('SignUp');
	};

	back = () => {
		this.props.navigation.goBack();
    };
    
    navigateToHome=()=>{
        this.props.navigation.navigate('Home');
    }

	render() {
		return (
			<React.Fragment>
				<StatusBar hidden={true} />
				<Container source={images.BackgroundAuth}>
				<ButtonBack onPress={this.back} />
				<View style={{ flex: 8, alignItems: 'center', paddingTop: scaleHeight(2) }}>
					<Image
						source={images.LogoLevinci}
						resizeMode="contain"
						style={{
							tintColor: 'white',
							width: scaleWidth(48)
						}}
					/>
					<Title>YOU CAN DO IT.</Title>
					<Title2>WE CAN HELP</Title2>
					<Paragraph>Inspired from Leonardo da Vinci</Paragraph>
					<Input placeHolder="Your domain" />
					<Input placeHolder="Email address" />
					<Input placeHolder="Password" />
					<ButtonSignIn onPress={this.navigateToHome} />
				</View>
				<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
					<Note>By signing up, you are to the User Notice and Privact Policy</Note>
				</View>
			</Container>
			</React.Fragment>
		);
	}
}

