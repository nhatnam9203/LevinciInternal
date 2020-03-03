import React from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';

const Select = () => (
	<React.Fragment>
		<SelectInput placeholder="Task title" placeholderTextColor="#7B7B7C" />
	</React.Fragment>
);

export default Select;

const SelectInput = styled.TextInput`
	border-bottom-color: #88898b;
	padding-bottom: 5px;
	border-bottom-width: 2px;
	color: #7b7b7c;
	margin-top: ${scaleHeight(4)};
	margin-bottom: ${scaleHeight(4)};
	fontSize: ${scaleWidth(3.5)};
`;
