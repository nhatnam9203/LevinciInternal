import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import { RowBetween } from '@component';

export default class time extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<TimeTracking>
				<RowBetween>
					<Text style={styles.timeTracking}>Time tracking</Text>
					<TimeTouch>
						<Text style={styles.timeTracking}>41 m</Text>
						<FontAwesome
							style={{ marginLeft: 5 }}
							name="caret-down"
							color={GlobalStyle.WHITE}
							size={scaleWidth(4)}
						/>
					</TimeTouch>
				</RowBetween>
			</TimeTracking>
		);
	}
}

const styles = StyleSheet.create({
	timeTracking: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: scaleWidth(3.5)
	}
});

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

const Status = styled.TouchableOpacity`
	padding: 5px 10px;
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

const TimeTracking = styled.View`
	borderBottomWidth: 0.5px;
	borderTopWidth: 0.5px;
	borderBottomColor: ${GlobalStyle.GREY};
	borderTopColor: ${GlobalStyle.GREY};
	padding: ${scaleHeight(2)}px 0px;
`;

const TimeTouch = styled.TouchableOpacity`flex-direction: row;`;
