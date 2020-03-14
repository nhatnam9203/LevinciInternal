import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { Text } from 'react-native';

export default class header extends PureComponent {

	render() {
		return (
			<Header>
				<Text
					style={{
						color: 'white',
						fontSize: scaleWidth(5),
						fontWeight: '600',
						letterSpacing: 0.3,
						textAlign: 'center',
					}}
				>
					Account
				</Text>
				<Text></Text>
			</Header>
		);
	}
}

const Header = styled.View`
	height: ${scaleHeight(12)};
	width: ${scaleWidth(100)};
	padding-top: ${scaleHeight(8)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
	
`;
