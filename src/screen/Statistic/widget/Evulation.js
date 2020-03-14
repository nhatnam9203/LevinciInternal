import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Row } from '@component';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';

export default class Evulation extends Component {
	render() {
		return (
			<React.Fragment>
				<Title>Evulation</Title>
				<Row
					style={{
						marginTop: scaleHeight(2)
					}}
				>
					<Content>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						...
					</Content>
				</Row>
			</React.Fragment>
		);
	}
}

const Title = styled.Text`
	fontSize: ${scaleWidth(4)};
	color: ${GlobalStyle.WHITE};
	fontWeight: 600;
	marginTop: ${scaleHeight(5)};
`;

const Content = styled.Text`
	fontSize: ${scaleWidth(3.5)};
	color: ${GlobalStyle.GREY};
`;
