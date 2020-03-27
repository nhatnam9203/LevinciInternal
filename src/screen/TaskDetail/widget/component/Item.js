import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';

export default class item extends PureComponent {
	render() {
		const { icon, content, onPress} = this.props;
		return (
			<Item onPress={onPress}>
				<Icon source={icon} />
				<Content>{content}</Content>
			</Item>
		);
	}
}

const Item = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	marginBottom: ${scaleHeight(2.5)};
`;

const Icon = styled.Image`
	width: ${scaleWidth(5.5)};
	height: ${scaleWidth(5.5)};
`;

const Content = styled.Text`
	marginLeft: ${scaleWidth(4)};
	color: #BBBBBB;
	fontSize: ${scaleWidth(3.5)};
`;
