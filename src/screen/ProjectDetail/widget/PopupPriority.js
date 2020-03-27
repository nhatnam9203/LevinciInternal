import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { scaleWidth, scaleHeight, slop } from '@utils';
import { GlobalStyle } from '@utils/styles';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Modal, RowBetween } from '@component';

const initialState = {
	checkList: [
		{
			name: 'Low',
			color: '#1161FB',
			isCheck: false
		},
		{
			name: 'Normal',
			color: '#22C7FC',
			isCheck: false
		},
		{
			name: 'Medium',
			color: '#63FD30',
			isCheck: false
		},
		{
			name: 'High',
			color: '#FEC52E',
			isCheck: false
		},
		{
			name: 'Important',
			color: '#FC5C1F',
			isCheck: false
		},
		{
			name: 'Immediate',
			color: '#FC0D1B',
			isCheck: false
		}
	],
	isCheckAll: false
};

export default class PopupPriority extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	closePopup = () => {
		this.props.togglePopupPrioroty();
	};

	toggleCheckAll = () => {
		const { isCheckAll, checkList } = this.state;
		if (isCheckAll) {
			checkList.forEach((el) => {
				el.isCheck = false;
			});
		} else {
			checkList.forEach((el) => {
				el.isCheck = true;
			});
		}
		this.setState({ isCheckAll: !isCheckAll, checkList });
	};

	resetAllState = () => {
		const { checkList } = this.state;
		checkList.forEach((element) => {
			element.isCheck = false;
		});
		this.setState({ checkList, isCheckAll: false });
	};

	setStateSlected = (state) => {
		const { checkList } = this.state;
		let pos = checkList.findIndex((obj) => obj.name === state.name);
		if (pos === -1) return;
		checkList[pos].isCheck = !checkList[pos].isCheck;
		this.setState({ checkList, isCheckAll: false });
	};

	renderPriorties() {
		const { checkList } = this.state;
		return checkList.map((obj, index) => {
			return (
				<RowBetween style={styles.rowBetween} key={index + 'priority'}>
					<Priority Color={obj.color}>
						<TextPriority>{obj.name}</TextPriority>
					</Priority>

					<TouchableOpacity onPress={() => this.setStateSlected(obj)} style={styles.check} hitSlop={slop}>
						{!obj.isCheck && <Feather name="square" color={GlobalStyle.GREY} size={scaleWidth(5)} />}
						{obj.isCheck && (
							<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
						)}
					</TouchableOpacity>
				</RowBetween>
			);
		});
	}

	render() {
		const { isVisible } = this.props;
		const { isCheckAll } = this.state;
		return (
			<Modal visible={isVisible} onRequestClose={this.closePopup}>
				<Container>
					<RowBetween style={styles.header}>
						<Text style={styles.state}>State</Text>
						<TouchableOpacity onPress={this.resetAllState}>
							<Text style={styles.clear}>Clear</Text>
						</TouchableOpacity>
					</RowBetween>

					<RowBetween style={styles.marginVertical}>
						<Text style={styles.textAll}>All</Text>
						<TouchableOpacity onPress={this.toggleCheckAll}>
							{!isCheckAll && <Feather name="square" color={GlobalStyle.GREY} size={scaleWidth(5)} />}
							{isCheckAll && (
								<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
							)}
						</TouchableOpacity>
					</RowBetween>

					{this.renderPriorties()}

					<TouchableOpacity onPress={this.closePopup} style={styles.touchSubmit}>
						<Text style={styles.textSubmit}>Submit</Text>
					</TouchableOpacity>
				</Container>
			</Modal>
		);
	}
}

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
		fontSize: scaleWidth(4),
		color: GlobalStyle.WHITE,
		fontWeight: '600'
	},
	normalItem: {
		fontSize: scaleWidth(4),
		color: GlobalStyle.GREY,
		fontWeight: '300'
	},
	itemRow: {
		marginTop: scaleHeight(2)
	},
	check: {
		position: 'absolute',
		right: 0,
		top: scaleHeight(1)
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
	textAll: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: scaleWidth(4)
	},
	rowBetween: {
		alignItems: 'center',
		marginTop: scaleHeight(0.8)
	},
	marginVertical: {
		marginVertical: scaleHeight(1.8)
	}
});

const Container = styled.View`
	width: ${scaleWidth(94)};
	padding: 15px;
	backgroundColor: #2b2e33;
	borderRadius: 5px;
`;

const Priority = styled.View`
	backgroundColor: ${(props) => props.Color};
	padding: ${scaleWidth(3)}px;
	borderRadius: 3px;
	marginBottom: 5px;
	position: relative;
	width: 90%;
`;

const TextPriority = styled.Text`
	color: white;
	fontWeight: 600;
	fontSize: ${scaleWidth(3.5)}
`;
