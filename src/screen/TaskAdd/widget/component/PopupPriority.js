import React, { Component } from 'react';
import Modal from '@component/Modal';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';

const priorities = [
	{
		name: 'Low',
		color: '#1161FB'
	},
	{
		name: 'Normal',
		color: '#22C7FC'
	},
	{
		name: 'Medium',
		color: '#63FD30'
	},
	{
		name: 'High',
		color: '#FEC52E'
	},
	{
		name: 'Important',
		color: '#FC5C1F'
	},
	{
		name: 'Immediate',
		color: '#FC0D1B'
	}
];

export default class PopupPriority extends Component {
	constructor(props) {
		super(props);
		this.state = {
			priority: ''
		};
	}

	setPriority = (priority) => {
		this.setState({ priority });
	};

	renderPriorties() {
		const { priority } = this.state;
		return priorities.map((obj, index) => {
			return (
				<Priority onPress={() => this.setPriority(obj.name)} Color={obj.color} key={index + 'priority'}>
					<TextPriority>{obj.name}</TextPriority>
					{priority === obj.name && (
						<AntDesign name="check" color={'white'} size={scaleWidth(5)} style={styles.check} />
					)}
				</Priority>
			);
		});
	}

	render() {
		const { isVisible, onPressDone } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>
					<Header>
						<Title>Priority</Title>
					</Header>
					<Body>
						{this.renderPriorties()}
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
	check: {
		fontWeight: 'bold',
		position: 'absolute',
		right: 5,
		top: 8
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

const Body = styled.View`padding: 15px;`;

const Done = styled(Title)`
    fontSize: ${scaleWidth(3.5)};
`;

const TouchDone = styled.TouchableOpacity`
	align-self: flex-end;
	marginTop: ${scaleHeight(4)};
`;

const Priority = styled.TouchableOpacity`
	backgroundColor: ${(props) => props.Color};
	padding: 10px;
	borderRadius: 3px;
	marginBottom: 5px;
	position: relative;
`;

const TextPriority = styled.Text`
	color: white;
	fontWeight: 600;
`;
