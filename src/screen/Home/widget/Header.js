import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { scaleWidth, scaleHeight } from '@utils';

export default class Header extends Component {
	render() {
		return (
			<Container>
				<TouchIcon>
					<Icon name="calendar-alt" color={'white'} size={scaleWidth(5)} />
				</TouchIcon>
				<Row>
					<Title>{`${moment().format('dddd')} , ${moment().format('DD/MM/YYYY')}`}</Title>
					<IonicIcon
						style={{
							marginLeft: 7
						}}
						name="md-arrow-dropdown"
						color="white"
						size={scaleWidth(5)}
					/>
				</Row>
				<TouchSetting hitSlop={{ top: 20, right: 20, left: 20, bottom: 20 }}>
					<IonicIcon name={'ios-settings'} color="white" size={scaleWidth(4.5)} />
				</TouchSetting>
			</Container>
		);
	}
}

const Container = styled.View`
	display: flex;
	flex-direction: row;
	paddingLeft: ${scaleWidth(4)};
	paddingRight: ${scaleWidth(4)};
	height: ${scaleHeight(8)};
	justify-content: space-between;
	align-items: flex-end;
`;

const Title = styled.Text`
	fontSize: ${scaleWidth(4)};
	color: white;
	font-weight: bold;
`;
const Row = styled.TouchableOpacity`flex-direction: row;`;

const TouchSetting = styled.TouchableOpacity`marginTop: 4;`;

const TouchIcon = styled.TouchableOpacity`marginBottom: 4;`;
