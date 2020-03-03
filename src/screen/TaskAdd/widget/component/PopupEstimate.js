import React, { Component } from 'react';
import Modal from '@component/Modal';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { View } from 'react-native';

export default class PopupEstimate extends Component {
	render() {
		const { isVisible, onPressDone } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>
					<Header>
						<Title>Time Estimate</Title>
					</Header>
					<Body>
						<Paragraph>Type in time</Paragraph>
						<View style={{ flexDirection: 'row', marginTop: scaleWidth(4) }}>
							<InputTime title="day" />
							<InputTime title="hour" />
							<InputTime title="minute" isDot={false} />
						</View>
						<TouchDone onPress={onPressDone}>
							<Done>DONE</Done>
						</TouchDone>
					</Body>
				</Container>
			</Modal>
		);
	}
}

const InputTime = ({ title, isDot = true }) => {
	return (
		<View style={{ marginRight: scaleWidth(2) }}>
			<Row>
				<Input keyboardType="numeric" maxLength={2} placeholder="00" placeholderTextColor="white" />
				{isDot && <TextDot>:</TextDot>}
			</Row>
			<Paragraph2>{title}</Paragraph2>
		</View>
	);
};

const Container = styled.View`
	width: ${scaleWidth(94)};
	borderRadius: 5;
	backgroundColor: ${GlobalStyle.BLACK};
`;
const Header = styled.View`
	padding: 15px;
	borderBottomWidth: 0.5;
	borderBottomColor: grey;
`;
const Title = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(4)};
	fontWeight: 600;
`;
const Body = styled.View`padding: 15px;`;

const Paragraph = styled.Text`
	color: ${GlobalStyle.GREY};
	fontSize: ${scaleWidth(3.8)};
	fontWeight: 400;
	letterSpacing: 0.6;
`;

const Paragraph2 = styled(Paragraph)`
    fontSize: ${scaleWidth(3)};
    marginTop: ${scaleWidth(2)};
    letterSpacing: 0.1;
`;

const Done = styled(Title)`
fontSize: ${scaleWidth(3.5)};
`;

const TouchDone = styled.TouchableOpacity`
	align-self: flex-end;
	marginTop: ${scaleHeight(4)};
`;

const Row = styled.View`flex-direction: row;`;

const Input = styled.TextInput`
	border-bottom-width: 1px;
	border-bottom-color: ${GlobalStyle.YELLOW};
	padding-bottom: 5px;
	color: white;
	font-weight: 600;
	font-size: ${scaleWidth(4)};
	width: ${scaleWidth(13)};
	position: relative;
`;

const TextDot = styled.Text`
	color: white;
	fontWeight: 600;
	fontSize: ${scaleWidth(4)};
	position: absolute;
	right: 0px;
`;
