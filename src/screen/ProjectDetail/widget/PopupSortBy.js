import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class PopupSortBy extends Component {
	sortCreated = () => {
        this.props.sortCreated();
        this.props.closeSortBy();
	};

	sortUpdated = () => {
        this.props.sortUpdated();
        this.props.closeSortBy();
	};

	sortDueDate = () => {
        this.props.sortDueDate();
        this.props.closeSortBy();
	};

	render() {
		const { isSortCreatedTime, isSortDueDateTime, isSortUpdatedTime } = this.props;
		return (
			<Container>
				<Text style={styles.title}>Sort by</Text>

				<Row onPress={this.sortCreated} style={{ marginTop: scaleWidth(4) }}>
					{!isSortCreatedTime && <Feather name="square" color={'#ffffff'} size={scaleWidth(4)} />}
					{isSortCreatedTime && (
						<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />
					)}
					<Text style={styles.sortBy}>Created Time</Text>
				</Row>

				<Row onPress={this.sortUpdated} style={{ marginTop: scaleWidth(4) }}>
					{!isSortUpdatedTime && <Feather name="square" color={'#ffffff'} size={scaleWidth(4)} />}
					{isSortUpdatedTime && (
						<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />
					)}
					<Text style={styles.sortBy}>Updated Time</Text>
				</Row>

				<Row onPress={this.sortDueDate} style={{ marginTop: scaleWidth(4) }}>
					{!isSortDueDateTime && <Feather name="square" color={'#ffffff'} size={scaleWidth(4)} />}
					{isSortDueDateTime && (
						<AntDesign name="checksquare" color={GlobalStyle.YELLOW} size={scaleWidth(4)} />
					)}
					<Text style={styles.sortBy}>Due date</Text>
				</Row>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	sortBy: {
		color: GlobalStyle.WHITE,
		fontSize: scaleWidth(3.5),
		fontWeight: '600',
		marginLeft: scaleWidth(3)
	},
	title: {
		color: GlobalStyle.WHITE,
		fontSize: scaleWidth(3.5),
		fontWeight: '600'
	}
});

const Container = styled.View`
	padding: 15px;
	backgroundColor: #2b2e33;
	borderRadius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 10px;
	right: 0px;
`;

const Row = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	position: relative;
`;
