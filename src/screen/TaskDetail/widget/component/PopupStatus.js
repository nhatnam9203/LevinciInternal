import React, { Component } from 'react';
import Modal from '@component/Modal';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { RowBetween } from '@component';
import { RadioButton } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';

export default class PopupAssigned extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: 'Done'
		};
	}

	render() {
		const { isVisible, onPressDone } = this.props;
		const { checked } = this.state;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>
					<Header>
						<Title>Set status</Title>
					</Header>
					<RowBetween style={styles.row}>
						<Text style={styles.status}>Done</Text>
						<RadioButton
							value="Done"
							status={checked === 'Done' ? 'checked' : 'unchecked'}
							onPress={() => {
								this.setState({ checked: 'Done' });
							}}
						/>
					</RowBetween>

					<RowBetween style={styles.row}>
						<Text style={styles.status}>Close</Text>
						<RadioButton
							value="Close"
							status={checked === 'Close' ? 'checked' : 'unchecked'}
							onPress={() => {
								this.setState({ checked: 'Close' });
							}}
						/>
					</RowBetween>
                    
					<Body>
						<TouchDone onPress={() => onPressDone(checked)}>
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
		paddingHorizontal: 15
	},
	status: {
		color: GlobalStyle.GREY,
		fontSize: scaleWidth(3.5)
	}
});

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
const Body = styled.View`
	padding: 15px;
	paddingTop: ${scaleHeight(1)}px;
`;

const Done = styled(Title)`
    fontSize: ${scaleWidth(3.5)};
`;

const TouchDone = styled.TouchableOpacity`
	align-self: flex-end;
	marginTop: ${scaleHeight(4)};
`;
