import React, { Component } from 'react';
import Modal from '@component/Modal';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import images from '@assets/images';

export default class PopupAssigned extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	renderItems() {
		const { assignee } = this.state;
		return (
			<React.Fragment>
				<Pick name="Take new photo" icon={images.Camera} onPress={() => {}} />
				<Pick name="Media" icon={images.Media} onPress={() => {}} />
				<Pick name="File" icon={images.File} onPress={() => {}} />
			</React.Fragment>
		);
	}

	render() {
		const { isVisible, onPressDone } = this.props;
		return (
			<Modal visible={isVisible} onRequestClose={() => {}}>
				<Container>
					<Header>
						<Title>Attachment</Title>
					</Header>
					<Body>
						{this.renderItems()}
						<TouchDone onPress={onPressDone}>
							<Done>DONE</Done>
						</TouchDone>
					</Body>
				</Container>
			</Modal>
		);
	}
}

const Pick = ({ name, icon, onPress, item }) => {
	return (
		<WrapItem activeOpacity={1} onPress={onPress}>
			<Icon source={icon} />
			<Name>{name}</Name>

			{/* {item.name === name && (
				<AntDesign
					name="check"
					color={'#5DE92D'}
					size={scaleWidth(5)}
					style={{
						fontWeight: 'bold',
						position: 'absolute',
						right: 5,
						top: scaleWidth(6)
					}}
				/>
			)} */}
		</WrapItem>
	);
};

const WrapItem = styled.TouchableOpacity`
	paddingTop: 15px;
	paddingBottom: 15px;
	flex-direction: row;
	borderBottomWidth: 0.17;
	borderBottomColor: grey;
	position: relative;
`;

const Container = styled.View`
	width: ${scaleWidth(94)};
	borderRadius: 5;
	backgroundColor: ${GlobalStyle.BLACK};
`;

const Header = styled.View`
	padding: 15px;
	borderBottomWidth: 1px;
	borderBottomColor: grey;
`;
const Title = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(4)};
	fontWeight: 600;
`;
const Body = styled.View`
	padding: 15px;
	paddingTop: ${scaleHeight(1)};
`;

const Done = styled(Title)`
    fontSize: ${scaleWidth(3.5)};
`;

const TouchDone = styled.TouchableOpacity`
	align-self: flex-end;
	marginTop: ${scaleHeight(4)};
`;

const Name = styled(Title)`
    color: #ffffff;
    marginLeft: ${scaleWidth(4)};
`;

const Icon = styled.Image`
	width: ${scaleWidth(5)};
	height: ${scaleWidth(5)};
`;
