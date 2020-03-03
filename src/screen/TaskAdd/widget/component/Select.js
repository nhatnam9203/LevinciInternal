import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import AntDeSign from 'react-native-vector-icons/AntDesign';

export default class Select extends PureComponent {
	render() {
		const { name, title } = this.props;
		return (
			<React.Fragment>
				<Title>{name}</Title>
				<SelectInput>
					<SelectInput.Text>{`- ${title} -`}</SelectInput.Text>
					<SelectInput.Icon>
						<AntDeSign name="caretdown" size={scaleWidth(3)} color={'#7B7B7C'} />
					</SelectInput.Icon>
				</SelectInput>
			</React.Fragment>
		);
	}
}

const Title = styled.Text`
	color: #7b7b7c;
	margin-top: ${scaleHeight(3)};
	margin-bottom: ${scaleHeight(3)};
    fontSize: ${scaleWidth(3.5)};
`;

const SelectInput = styled.View`
	flex-direction: row;
	justify-content: space-between;
	border-bottom-color: ${GlobalStyle.YELLOW};
	padding-bottom: 5px;
    border-bottom-width: 1px;
`;

SelectInput.Text = styled.Text`
	color: ${GlobalStyle.WHITE};
	fontWeight: 600;
    fontSize: ${scaleWidth(3.5)}
`;

SelectInput.Icon = styled.TouchableOpacity``;