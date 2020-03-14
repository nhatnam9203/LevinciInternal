import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleWidth, scaleHeight, slop } from '@utils';
import { GlobalStyle } from '@utils/styles';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Modal, RowBetween } from '@component';

const initialState = {
	isAutomatic: false,
	isUnassign: false,

	assignee: '',

	peopleList: [
		{
			name: 'Chủ Tịch',
			symbol: 'CT',
			color: '#33ACE0',
			email: 'chutich@example.com',
			isCheck: false
		},
		{
			name: 'Thư ký',
			symbol: 'TK',
			color: '#FC5C1F',
			email: 'thuky@example.com',
			isCheck: false
		},
		{
			name: 'Giám đốc',
			symbol: 'GĐ',
			color: '#FEC52E',
			email: 'giamdoc@example.com',
			isCheck: false
		},
		{
			name: 'Kế toán',
			symbol: 'KT',
			color: '#FC0D1B',
			email: 'ketoan@example.com',
			isCheck: false
		}
	]
};

export default class PopupAssignee extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	closePopup = () => {
		this.props.togglePopupAssignee();
	};

	resetAssignee = () => {
		const { peopleList } = this.state;
		peopleList.forEach((p) => {
			p.isCheck = false;
		});
		this.setState({ peopleList });
	};

	toggleAutomatic = async () => {
		const { isAutomatic } = this.state;
		this.setState({
			isAutomatic: !isAutomatic,
			isUnassign: !isAutomatic ? false : true
		});
		this.resetAssignee();
	};

	toggleUnassign = async () => {
		const { isUnassign } = this.state;
		this.setState({
			isUnassign: !isUnassign,
			isAutomatic: !isUnassign ? false : true
		});
		this.resetAssignee();
	};

	setAssignee = (assignee) => {
		const { peopleList } = this.state;
		const pos = peopleList.findIndex((obj) => obj.name === assignee.name);

		peopleList[pos].isCheck = !peopleList[pos].isCheck;

		this.setState({
			peopleList,
			isAutomatic: false,
			isUnassign: false
		});
	};

	resetAllState = () => {
		const { peopleList } = this.state;
		peopleList.forEach((el) => {
			el.isCheck = false;
		});
		this.setState({
			isUnassign: false,
			isAutomatic: false,
			peopleList
		});
	};

	renderAssignees() {
		const { peopleList } = this.state;
		return peopleList.map((obj, index) => {
			return (
				<People
					key={index}
					isCheck={obj.isCheck}
					name={obj.name}
					logoColor={obj.color}
					logoText={obj.symbol}
					assignee={obj}
					email={obj.email}
					setAssignee={this.setAssignee}
				/>
			);
		});
	}

	renderBottom() {
		const { isAutomatic, isUnassign } = this.state;
		return (
			<React.Fragment>
				<RowBetween style={styles.itemRow}>
					<Text style={isAutomatic === 0 ? styles.item : styles.normalItem}>Automatic</Text>
					<TouchableOpacity hitSlop={slop} onPress={this.toggleAutomatic}>
						{!isAutomatic && <Feather name="square" color={GlobalStyle.GREY} size={scaleWidth(4)} />}
						{isAutomatic && (
							<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />
						)}
					</TouchableOpacity>
				</RowBetween>

				<RowBetween style={styles.itemRow}>
					<Text style={isUnassign === 0 ? styles.item : styles.normalItem}>UnAssign</Text>
					<TouchableOpacity hitSlop={slop} onPress={this.toggleUnassign}>
						{!isUnassign && <Feather name="square" color={GlobalStyle.GREY} size={scaleWidth(4)} />}
						{isUnassign && <AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />}
					</TouchableOpacity>
				</RowBetween>
			</React.Fragment>
		);
	}

	render() {
		const { isVisible } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={this.closePopup}>
				<Container>
					<RowBetween style={styles.header}>
						<Text style={styles.state}>Assignee</Text>
						<TouchableOpacity onPress={this.resetAllState}>
							<Text style={styles.clear}>Clear</Text>
						</TouchableOpacity>
					</RowBetween>

					{this.renderAssignees()}
					{this.renderBottom()}

					<TouchableOpacity onPress={this.closePopup} style={styles.touchSubmit}>
						<Text style={styles.textSubmit}>Submit</Text>
					</TouchableOpacity>
				</Container>
			</Modal>
		);
	}
}

const People = ({ logoText, name, email, logoColor, assignee, setAssignee, isCheck }) => {
	return (
		<WrapPeople activeOpacity={1}>
			<Logo Color={logoColor}>
				<Logo.Text>{logoText}</Logo.Text>
			</Logo>

			<View style={styles.nameEmail}>
				<Name>{name}</Name>
				<Email>{email}</Email>
			</View>

			<TouchableOpacity onPress={() => setAssignee(assignee)} style={styles.checkPeople} hitSlop={slop}>
				{!isCheck && <Feather name="square" color={GlobalStyle.GREY} size={scaleWidth(4)} />}
				{isCheck && <AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />}
			</TouchableOpacity>
		</WrapPeople>
	);
};

const styles = StyleSheet.create({
	state: {
		color: GlobalStyle.YELLOW,
		fontWeight: '600',
		fontSize: scaleWidth(4)
	},
	clear: {
		color: GlobalStyle.GREY,
		fontWeight: '300',
		fontSize: scaleWidth(4)
	},
	header: {
		borderBottomWidth: 0.5,
		borderBottomColor: GlobalStyle.GREY,
		paddingBottom: scaleHeight(1.5)
	},
	item: {
		fontSize: scaleWidth(3.5),
		color: GlobalStyle.WHITE,
		fontWeight: '600'
	},
	normalItem: {
		fontSize: scaleWidth(3.5),
		color: GlobalStyle.GREY,
		fontWeight: '300'
	},
	itemRow: {
		marginTop: scaleHeight(2)
	},
	touchSubmit: {
		alignSelf: 'flex-end',
		marginTop: scaleHeight(3),
		marginBottom: scaleHeight(1)
	},
	textSubmit: {
		fontSize: scaleWidth(4),
		color: GlobalStyle.YELLOW,
		fontWeight: '500'
	},
	checkPeople: {
		position: 'absolute',
		right: 0,
		top: scaleHeight(2)
	},
	nameEmail: {
		justifyContent: 'space-between',
		marginLeft: scaleWidth(3)
	}
});

const Container = styled.View`
	width: ${scaleWidth(94)};
	padding: 15px;
	backgroundColor: #2b2e33;
	borderRadius: 5px;
`;

const WrapPeople = styled.View`
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

const Title = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(4)};
	fontWeight: 600;
`;

const Name = styled(Title)`
    fontWeight: 700;
`;

const Email = styled.Text`
	color: #288ab5;
	fontSize: ${scaleWidth(3)};
`;
