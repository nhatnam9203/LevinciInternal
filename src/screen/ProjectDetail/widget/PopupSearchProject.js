import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Modal } from '@component';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import styled from 'styled-components/native';

export default class PopupSearchProject extends Component {
	render() {
		const { isVisible, onPressDone } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={onPressDone}>
				<Container>
					<Input placeholder="Search project" placeholderTextColor="grey" />

					<Title>Current project</Title>
					<RowTouch isActive onPress={onPressDone}>
						<Logo BackgroundColor="#F28A77">
							<Logo.Text>HP</Logo.Text>
						</Logo>
						<ProjectTitle>HarmonyPay</ProjectTitle>
					</RowTouch>

					<Title>Other project</Title>

					<RowTouch onPress={onPressDone}>
						<Logo BackgroundColor="#22C7FC">
							<Logo.Text>PE</Logo.Text>
						</Logo>
						<ProjectTitle>Popeyes</ProjectTitle>
					</RowTouch>

					<RowTouch onPress={onPressDone}>
						<Logo BackgroundColor="#FC1157">
							<Logo.Text>BK</Logo.Text>
						</Logo>
						<ProjectTitle>BugerKing</ProjectTitle>
					</RowTouch>
				</Container>
			</Modal>
		);
	}
}

const Container = styled.View`
	width: ${scaleWidth(94)};
	padding: 15px;
	backgroundColor: #2b2e33;
	borderRadius: 5px;
`;

const Input = styled.TextInput`
	width: 100%;
	color: grey;
	fontSize: ${scaleWidth(4)};
	paddingBottom: ${scaleHeight(1)};
	borderBottomColor: ${GlobalStyle.GREY};
	borderBottomWidth: 1px;
`;
const Title = styled.Text`
	color: #bdbebf;
	marginTop: ${scaleHeight(1.5)};
	marginBottom: ${scaleHeight(1.5)};
	fontSize: ${scaleWidth(4)};
`;

const Logo = styled.View`
	justify-content: center;
	align-items: center;
	width: ${scaleWidth(12)};
	height: ${scaleWidth(12)};
	backgroundColor: ${(props) => props.BackgroundColor};
	borderRadius: 50px;
`;

Logo.Text = styled.Text`
	color: ${GlobalStyle.WHITE};
	fontWeight: 600;
	fontSize: ${scaleWidth(4)};
`;
const ProjectTitle = styled(Title)`
    fontWeight: 600;
    marginLeft: ${scaleWidth(2)};
    color: #ffffff;
 `;

const RowTouch = styled.TouchableOpacity`
	flex-direction: row;
	paddingTop: 15px;
	paddingBottom: 15px;
	marginLeft: -15px;
	marginRight: -15px;
	paddingLeft: 15px;
	backgroundColor: ${(props) => (props.isActive ? '#1F2023' : '#2B2E33')};
`;
