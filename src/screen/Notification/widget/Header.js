import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Row } from '@component';
import { GlobalStyle } from '@utils/styles';
import images from '@assets/images';
import NavigationServices from '@navigator/NavigationServices';

export default class header extends PureComponent {
	navigateToSetting = () => {
		NavigationServices.navigate('Setting');
	};

	render() {
		return (
			<Header>
				<Row style={{ alignItems: 'center' }}>
					<TouchableOpacity onPress={this.navigateToSetting}>
						<IconLeft source={images.ArrowLeft} />
					</TouchableOpacity>
					<Text style={styles.notification}>Notifications</Text>
				</Row>
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	notification: {
		color: '#ffffff',
		fontWeight: '600',
		fontSize: scaleWidth(5),
		marginLeft: scaleWidth(3)
	}
});

const IconLeft = styled.Image`
	width: ${scaleWidth(6)};
	height: ${scaleWidth(6)};
`;

const Header = styled.View`
	height: ${scaleHeight(12)};
	width: ${scaleWidth(100)};
	padding-top: ${scaleHeight(8)};
	paddingLeft: ${scaleWidth(3)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
`;
