import React, { Component } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import Item from './Item'


export default class AllProjects extends Component {
	render() {
		return (
			<React.Fragment>
				<Title>All projects</Title>
				<Item logoText='HP' titleProject='HarmonyPay' rate='Good' colorBar={'#EBB028'} colorProject='#F28A77' />
                <Item logoText='PE' titleProject='Popeyes' rate='Excellent' colorBar={'#63FD30'} colorProject='#22C7FC' />
                <Item logoText='BK' titleProject='BugerKing' rate='Delay' colorBar={'#FC0D1B'} colorProject='#FC1157' />
			</React.Fragment>
		);
	}
}

const Title = styled.Text`
	color: ${GlobalStyle.GREY};
	font-size: ${scaleWidth(3.5)};
	margin-top: ${scaleHeight(4)};
`;
