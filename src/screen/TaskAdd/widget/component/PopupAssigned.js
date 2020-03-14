import React, { Component } from 'react';
import Modal from '@component/Modal';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const peopleList = [
	{
		name: 'Chủ Tịch',
		symbol: 'CT',
		color: '#33ACE0',
		email: 'chutich@example.com'
	},
	{
		name: 'Thư ký',
		symbol: 'TK',
		color: '#FC5C1F',
		email: 'thuky@example.com'
	},
	{
		name: 'Giám đốc',
		symbol: 'GĐ',
		color: '#FEC52E',
		email: 'giamdoc@example.com'
	},
	{
		name: 'Kế toán',
		symbol: 'KT',
		color: '#FC0D1B',
		email: 'ketoan@example.com'
	}
];

export default class PopupAssigned extends Component {
	constructor(props) {
		super(props);
		this.state = {
			assignee: ''
		};
	}

	setAssignee = (assignee) => {
		this.setState({ assignee });
	};

	renderPeople() {
		const { assignee } = this.state;
		return peopleList.map((obj, index) => {
			return (
				<People
					onPress={() => this.setAssignee(obj)}
					key={index}
					name={obj.name}
					logoColor={obj.color}
					logoText={obj.symbol}
					assignee={assignee}
					email={obj.email}
				/>
			);
		});
	}

	render() {
		const { isVisible, onPressDone } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>
					<Header>
						<Title>Asignee</Title>
					</Header>
					<Body>
						{this.renderPeople()}
						<TouchDone onPress={onPressDone}>
							<Done>DONE</Done>
						</TouchDone>
					</Body>
				</Container>
			</Modal>
		);
	}
}

const People = ({ logoText, name, email, logoColor, onPress, assignee }) => {
	return (
		<WrapPeople activeOpacity={1} onPress={onPress}>
			<Logo Color={logoColor}>
				<Logo.Text>{logoText}</Logo.Text>
			</Logo>
			<View style={styles.wrap}>
				<Name>{name}</Name>
				<Email>{email}</Email>
			</View>

			{assignee.name === name && (
				<AntDesign name="check" color={'#5DE92D'} size={scaleWidth(5)} style={styles.check} />
			)}
		</WrapPeople>
	);
};

const styles = StyleSheet.create({
	check: {
		fontWeight: 'bold',
		position: 'absolute',
		right: 5,
		top: scaleWidth(6)
	},
	wrap: {
		justifyContent: 'space-between',
		marginLeft: scaleWidth(3)
	}
});

const WrapPeople = styled.TouchableOpacity`
	paddingTop: 15px;
	paddingBottom: 15px;
	flex-direction: row;
	borderBottomWidth: 0.17;
	borderBottomColor: grey;
	position: relative;
`;

const Logo = styled.View`
	width: ${scaleWidth(10)};
	height: ${scaleWidth(10)};
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.Color};
	border-radius: 50;
`;

Logo.Text = styled.Text`
	color: white;
	font-weight: 700;
	font-size: ${scaleWidth(3.5)};
`;

const Container = styled.View`
	width: ${scaleWidth(94)};
	borderRadius: 5;
	backgroundColor: ${GlobalStyle.BLACK};
`;

const Header = styled.View`
	padding: 15px;
	borderBottomWidth: 0.5;
	borderBottomColor: grey;
`;
const Title = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(4)};
	fontWeight: 600;
`;
const Body = styled.View`
	padding: 15px;
	paddingTop: 0px;
`;

const Done = styled(Title)`
    fontSize: ${scaleWidth(3.5)};
`;

const TouchDone = styled.TouchableOpacity`
	align-self: flex-end;
	marginTop: ${scaleHeight(4)};
`;

const Name = styled(Title)`
    fontWeight: 700;
`;

const Email = styled.Text`
	color: #288ab5;
	fontSize: ${scaleWidth(3)};
`;
