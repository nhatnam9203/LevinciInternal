import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';

export default class Select extends PureComponent {
	render() {
		const { name, title } = this.props;
		return (
			<React.Fragment>
				<Title>Description</Title>
				<SelectInput placeholder='Add task description' placeholderTextColor='grey' />
			</React.Fragment>
		);
	}
}

const Title = styled.Text`
	color: #88898B;
	margin-bottom: ${scaleHeight(3)};
    fontSize: ${scaleWidth(3.5)};
    fontWeight: 600;
`;

const SelectInput = styled.TextInput`
	border-bottom-color: ${GlobalStyle.YELLOW};
	padding-bottom: 5px;
    border-bottom-width: 0;
    color: #7b7b7c;
    fontSize: ${scaleWidth(3)};
	margin-bottom: ${scaleHeight(2)};
`;

