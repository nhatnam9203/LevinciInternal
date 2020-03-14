import React, { Component } from 'react';
import Modal from '@component/Modal';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class PopupDueDate extends Component {
	render() {
		const { isVisible, onPressDone } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>
					<Header>
						<Title>Due date</Title>
					</Header>
					<Body>
						<View style={styles.row}>
							<InputTime placeholder="Jan 15" width={scaleWidth(37)} />
							<InputTime placeholder="9:00 AM" width={scaleWidth(37)} />
						</View>
						
						<Paragraph>Set reminder</Paragraph>
						<InputTime placeholder="1 day before" width={'100%'} />

						<TouchDone onPress={onPressDone}>
							<Done>DONE</Done>
						</TouchDone>
					</Body>
				</Container>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		marginTop: scaleWidth(4),
		justifyContent: 'space-between'
	},
	caretdown : {
		position: 'absolute',
		right: 0,
		top: 3
	}
});

const InputTime = ({ width, placeholder }) => {
	return (
		<View style={{ marginRight: scaleWidth(2) }}>
			<Row>
				<Input
					Width={width}
					keyboardType="numeric"
					maxLength={2}
					placeholder={placeholder}
					placeholderTextColor="white"
				/>
				<AntDesign
					style={styles.caretdown}
					name="caretdown"
					color={'grey'}
					size={scaleWidth(2.8)}
				/>
			</Row>
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
	marginTop: ${scaleWidth(4)};
	marginBottom: ${scaleWidth(4)};
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
	font-size: ${scaleWidth(3.5)};
	width: ${(props) => props.Width};
	position: relative;
`;
