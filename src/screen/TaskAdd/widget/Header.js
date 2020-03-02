import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import AntDeSign from 'react-native-vector-icons/AntDesign';
import NavigationServices from '@navigator/NavigationServices';

export default class header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	back = () => {
		NavigationServices.navigate('Task');
	};

	render() {
		return (
			<Header>
				<TouchBack onPress={this.back}>
					<AntDeSign name="close" color={GlobalStyle.YELLOW} size={scaleWidth(6)} />
				</TouchBack>
				<Title>Add task</Title>
				<TouchTick>
					<AntDeSign name="check" color={GlobalStyle.YELLOW} size={scaleWidth(6)} />
				</TouchTick>
			</Header>
		);
	}
}

const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: ${scaleHeight(12)};
	width: ${scaleWidth(100)};
	padding-top: ${scaleHeight(6)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
`;

const TouchBack = styled.TouchableOpacity`
	padding: 10px;
	justify-content: center;
	align-items: center;
`;

const TouchTick = styled(TouchBack)`
    /* position: absolute; */
`;

const Title = styled.Text`
	color: ${GlobalStyle.WHITE};
	fontWeight: 600;
	fontSize: ${scaleWidth(5.5)};
	letterSpacing: 0.3;
	marginRight: ${scaleWidth(55)};
`;
