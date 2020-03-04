import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import images from '@assets/images';

export default class header extends PureComponent {
	render() {
		return (
			<Header>
				<View />
				<Text style={styles.title}>Inbox</Text>
				<View style={styles.groupIcon}>
					<TouchableOpacity>
						<Icon source={images.TrashAll} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon Left source={images.TreeDot} />
					</TouchableOpacity>
				</View>
			</Header>
		);
	}
}

const Header = styled.View`
	height: ${scaleHeight(12)};
	width: ${scaleWidth(100)};
	padding: 10px;
	padding-top: ${scaleHeight(8)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	background-color: #2b2e33;
	position: relative;
`;

const Icon = styled.Image`
	width: ${scaleWidth(6)};
	height: ${scaleWidth(6)};
	marginLeft: ${(props) => (props.Left ? scaleWidth(2) : 0)};
`;

const styles = StyleSheet.create({
	title: {
		color: 'white',
		fontSize: scaleWidth(5),
		fontWeight: '600',
		letterSpacing: 0.3,
		textAlign: 'center'
	},
	groupIcon: {
		flexDirection: 'row',
		position: 'absolute',
		right: 10,
		top: scaleHeight(8)
	}
});
