import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavigationServices from '@navigator/NavigationServices';

export default class Body extends Component {
	logout = () => {
		NavigationServices.navigate('Auth');
	};

	render() {
		return (
			<Container>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Top>
						<Logo>
							<Logo.Text>NP</Logo.Text>
						</Logo>
						<Name>Phan Nhật Nam</Name>
						<Email>nam.phan @levincigoup.com</Email>
					</Top>

					<Bottom>
						<Row>
							<Text style={styles.profile}>Profile</Text>
							<TouchableOpacity>
								<MaterialIcons name="edit" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
							</TouchableOpacity>
						</Row>

						<InputItem title="Display name" value="Phan Nhật Nam" />
						<InputItem title="Email address" value="nam.phan@levincigoup.com" />
						<InputItem title="Department" value="Production" />
						<InputItem title="Title" value="Coolier" />
						<InputItem title="PTO days" value="-0.6" />
						<InputItem title="Month efficient" value="93%" />

						<ViewPassword>
							<Security>Security</Security>
							<Security.Text>Change password</Security.Text>
						</ViewPassword>

						<TouchableOpacity onPress={this.logout}>
							<Text style={styles.logout}>Log out</Text>
						</TouchableOpacity>
					</Bottom>

					<View style={{ height: scaleHeight(10) }} />
				</ScrollView>
			</Container>
		);
	}
}

const InputItem = ({ title = '', value = '' }) => {
	return (
		<WrapInput>
			<Text style={styles.title}>{title}</Text>
			<Input value={value} />
		</WrapInput>
	);
};

const styles = StyleSheet.create({
	logout: {
		color: 'white',
		fontSize: scaleWidth(4),
		fontWeight: 'bold'
	},
	title: {
		color: '#ffffff',
		fontWeight: '500',
		fontSize: scaleWidth(4)
	},
	profile : {
		fontWeight : 'bold',
		fontSize : scaleWidth(4.5),
		color : 'white'
	}
});

const Container = styled.View`flex: 1;`;

const Top = styled.View`
	width: ${scaleWidth(100)};
    align-items: center;
    padding: 15px;
    borderBottomWidth: 0.5px;
    borderBottomColor: grey;
`;

const Bottom = styled.View`
	flex: 1;
	padding: 15px;
`;

const Logo = styled.View`
	width: ${scaleWidth(35)};
	height: ${scaleWidth(35)};
	justify-content: center;
	align-items: center;
	background-color: #33ace0;
	borderRadius: ${scaleWidth(30)};
	marginTop: ${scaleHeight(3)};
`;

Logo.Text = styled.Text`
	color: white;
	font-weight: bold;
	fontSize: ${scaleWidth(15)};
`;

const Name = styled.Text`
	color: white;
	fontWeight: 600;
	fontSize: ${scaleWidth(5)};
	marginTop: ${scaleHeight(3)};
`;

const Email = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(3.5)};
	marginTop: ${scaleHeight(0.7)};
`;

const WrapInput = styled.View`
	width: 100%;
	height: ${scaleHeight(5)};
	justify-content: space-between;
	marginTop: ${scaleHeight(4)};
`;

const Input = styled.TextInput`
	backgroundColor: transparent;
	fontSize: ${scaleWidth(3.5)};
	color: grey;
`;

const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	marginTop: ${scaleHeight(1.5)};
`;

const ViewPassword = styled.View`
	margin-top: ${scaleHeight(4)};
	margin-bottom: ${scaleHeight(2)};
	padding-top: ${scaleHeight(2)};
	padding-bottom: ${scaleHeight(2)};
	borderBottomWidth: 0.5px;
	borderBottomColor: grey;
	borderTopWidth: 0.5px;
	borderTopColor: grey;
`;

const Security = styled.Text`
	color: white;
	fontSize: ${scaleWidth(4)};
	fontWeight: bold;
`;

Security.Text = styled(Security)`
    marginTop: ${scaleHeight(2)};
    fontWeight: 500;
    fontSize: ${scaleWidth(3.5)};
`;

