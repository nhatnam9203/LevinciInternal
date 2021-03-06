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
			name: 'All state',
			isCheck: false
		},
		{
			name: 'Open',
			isCheck: false
		},
		{
			name: 'Processing',
			isCheck: false
		},
		{
			name: 'Pending',
			isCheck: false
		},
		{
			name: 'Close',
			isCheck: false
		}
	]
};

export default class PopupState extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	closePopup = () => {
		this.props.togglePopupState();
	};

	resetAllState = () => {
		const { checkList } = this.state;
		checkList.forEach((element) => {
			element.isCheck = false;
		});
		this.setState({ checkList });
	};

	setAllState = () => {
		const { checkList } = this.state;
		if (checkList[0].isCheck === true) {
			checkList.forEach((el) => {
				el.isCheck = false;
			});
			this.setState({ checkList });
			return;
		} else {
			checkList.forEach((el) => {
				el.isCheck = true;
			});
			this.setState({ checkList });
			return;
		}
	};

	setStateSlected = (state) => {
		const { checkList } = this.state;
		let pos = checkList.findIndex((obj) => obj.name === state.name);
		if (pos === -1) return;
		if (pos === 0) {
			this.setAllState();
			return;
		}
		checkList[pos].isCheck = !checkList[pos].isCheck;
		checkList[0].isCheck = false;
		this.setState({ checkList });
	};

	render() {
		const { isVisible } = this.props;
		const { checkList } = this.state;
		return (
			<Modal visible={isVisible} onRequestClose={this.closePopup}>
				<Container>
					<RowBetween style={styles.header}>
						<Text style={styles.state}>State</Text>
						<TouchableOpacity onPress={this.resetAllState}>
							<Text style={styles.clear}>Clear</Text>
						</TouchableOpacity>
					</RowBetween>

					{checkList.map((obj, index) => {
						return (
							<RowBetween key={index} style={styles.itemRow}>
								<Text style={index === 0 ? styles.item : styles.normalItem}>{obj.name}</Text>
								<TouchableOpacity hitSlop={slop} onPress={() => this.setStateSlected(obj)}>
									{!obj.isCheck && (
										<Feather name="square" color={GlobalStyle.GREY} size={scaleWidth(4)} />
									)}
									{obj.isCheck && (
										<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />
									)}
								</TouchableOpacity>
							</RowBetween>
						);
					})}
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
	touchSubmit: {
		alignSelf: 'flex-end',
		marginTop: scaleHeight(3),
		marginBottom: scaleHeight(1)
	},
	textSubmit: {
		fontSize: scaleWidth(4),
		color: GlobalStyle.YELLOW,
		fontWeight: '500'
	}
});

const Container = styled.View`
	width: ${scaleWidth(94)};
	padding: 15px;
	backgroundColor: #2b2e33;
	borderRadius: 5px;
`;
