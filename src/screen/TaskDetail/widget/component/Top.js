import React, { Component } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth,slop } from '@utils';
import { Row, RowBetween } from '@component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'Done'
		};
	}

	render() {
		const { status, togglePopupStatus } = this.props;

		return (
			<RowBetween alignCenter>
				<Row>
					<Logo Color={'#F28A77'}>
						<Logo.Text>HP</Logo.Text>
					</Logo>
					<ProjectName>HarmonyPay</ProjectName>
				</Row>

				<Status hitSlop={slop} onPress={togglePopupStatus}>
					<Status.Text>{status}</Status.Text>
					<FontAwesome
						style={{ marginLeft: scaleWidth(1) }}
						name="caret-down"
						size={scaleWidth(3.5)}
						color={GlobalStyle.WHITE}
					/>
				</Status>
			</RowBetween>
		);
	}
}

const Logo = styled.View`
	height: ${scaleWidth(12)};
	width: ${scaleWidth(12)};
	justify-content: center;
	align-items: center;
	backgroundColor: ${(props) => props.Color};
	borderRadius: 50px;
`;

Logo.Text = styled.Text`
	color: #ffffff;
	fontWeight: 600;
	fontSize: ${scaleWidth(3.5)};
`;

const ProjectName = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(5)};
	fontWeight: 600;
	marginLeft: ${scaleWidth(3)};
`;

const Status = styled.TouchableOpacity`
	padding: ${scaleWidth(1)}px ${scaleWidth(2)}px;
	background-color: #1161fb;
	border-radius: 5px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

Status.Text = styled.Text`
	color: #ffffff;
	fontSize: ${scaleWidth(3)};
`;
