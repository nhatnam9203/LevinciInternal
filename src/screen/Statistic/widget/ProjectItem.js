import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Row, RowBetween } from '@component';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';

export default class ProjectItem extends Component {
	render() {
		const { color, name, hour } = this.props;
		return (
			<RowBetween
				alignCenter
				style={{
					marginTop: scaleHeight(2)
				}}
			>
				<Row>
					<Logo Color={color} />
					<ProjectName>{name}</ProjectName>
				</Row>
				<Hour>{hour}</Hour>
			</RowBetween>
		);
	}
}

const Logo = styled.View`
	height: ${scaleWidth(7)};
	width: ${scaleWidth(7)};
	backgroundColor: ${(props) => props.Color};
`;

const ProjectName = styled.Text`
	color: ${GlobalStyle.WHITE};
	marginLeft: ${scaleWidth(2)};
	fontSize: ${scaleWidth(4)};
`;

const Hour = styled.Text`
	color: ${GlobalStyle.GREY};
	fontSize: ${scaleWidth(4)};
`;
