import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { TouchableRipple } from 'react-native-paper';
import images from '@assets/images';

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

	render() {
		return (
			<React.Fragment>
				<StatusBar hidden={true} />
				<Container source={images.BackgroundAuth}>
					<View style={{ flex: 7, alignItems: 'center', paddingTop: scaleWidth(10) }}>
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
						<TouchableRipple onPress={this.navigateToSignIn} style={styles.button}>
							<TxtButton>LOGIN</TxtButton>
						</TouchableRipple>
						<TouchableRipple onPress={this.navigateToSignUp} style={[ styles.button, styles.button2 ]}>
							<TxtButton2>SIGN UP</TxtButton2>
						</TouchableRipple>
					</View>
					<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						<Note>
							<Text>By signing up, you are to the</Text>
							<Text style={styles.yellow}> User Notice</Text>
							<Text> and </Text>
							<Text style={styles.yellow}>Privact Policy</Text>
						</Note>
					</View>
				</Container>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: scaleWidth(70),
		padding: scaleWidth(3.5),
		backgroundColor: '#EBB028',
		borderRadius: scaleWidth(10),
		justifyContent: 'center',
		alignItems: 'center'
	},
	button2: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#EBB028',
		marginTop: scaleWidth(3)
	},
	yellow: {
		color: GlobalStyle.YELLOW
	}
});

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

const TxtButton = styled.Text`
	color: #ffffff;
	fontSize: ${scaleWidth(4.3)};
	fontWeight: bold;
	letterSpacing: 0.6;
`;

const TxtButton2 = styled(TxtButton)`
    color: #EBB028;
`;
