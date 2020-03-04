import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import images from '@assets/images';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

export default class Email extends PureComponent {
	render() {
		const { isRead } = this.props;
		return (
			<Item activeOpacity={0.8} IsRead={isRead}>
				<Avatar source={images.DefaultAvatar} />
				<Content>
					<View style={styles.content}>
						<Name>Binladen</Name>
						<Time>{moment().format('hh:mm A')}</Time>
					</View>
					<Title numberOfLines={1} ellipsizeMode="tail">
						تروي نادية مراد قصة كفاحها ضد تنظيم الدولة الإسلام
					</Title>
					<Paragraph numberOfLines={2} ellipsizeMode="tail">
						تروي نادية مراد قصة كفاحها ضد تنظيم الدولة الإسلامية في العراق والشام (داعش) كجزء من حلقة نقاش
						حولتروي نادية مراد قصة كفاحها ضد تنظيم الدولة الإسلامية في العراق والشام (داعش) كجزء من حلقة
						نقاش حول
					</Paragraph>
				</Content>
			</Item>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		width: scaleWidth(70),
		justifyContent: 'space-between',
		flexDirection: 'row'
	}
});

const Item = styled.TouchableOpacity`
	width: 100%;
	flex-direction: row;
	padding: 15px;
	marginTop: ${scaleHeight(3)};
	position: relative;
	borderRadius: 5px;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
	backgroundColor: #2b2e33;
	opacity: ${(props) => (props.IsRead ? 0.5 : 1)};
`;

const Avatar = styled.Image`
	width: ${scaleWidth(12)};
	height: ${scaleWidth(12)};
	border: 2px solid #333;
	borderRadius: 50px;
`;

const Content = styled.View`marginLeft: ${scaleWidth(3)};`;

const Name = styled.Text`
	color: #ffffff;
	fontSize: ${scaleWidth(3.5)};
	letterSpacing: 0.3;
`;

const Paragraph = styled(Name)`
	width: ${scaleWidth(60)};
`;

const Time = styled.Text`
	color: #ffffff;
	fontSize: ${scaleWidth(3.3)};
	letterSpacing: 0.3;
`;

const Title = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(5)};
	fontWeight: 600;
	marginTop: ${scaleHeight(1)};
	marginBottom: ${scaleHeight(1)};
	width: ${scaleWidth(50)};
`;
