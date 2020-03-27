import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import { Row } from '@component';
import images from '@assets/images';
import moment from 'moment';

const data = [
	{
		avatar: images.DefaultAvatar,
		name: 'Nam Phan',
		date: `${moment().format('dddd')},${moment().format('hh:mm A')}`,
		content: '123 456 789 , stop ....'
	},
	{
		avatar: images.DefaultAvatar,
		name: 'Nam Phan',
		date: `${moment().format('dddd')},${moment().format('hh:mm A')}`,
		content: '123 456 789 , stop ....'
	},
	{
		avatar: images.DefaultAvatar,
		name: 'Nam Phan',
		date: `${moment().format('dddd')},${moment().format('hh:mm A')}`,
		content: '123 456 789 , stop ....'
	}
];

export default class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		};
	}

	render() {
		const { data } = this.state;
		return (
			<React.Fragment>
				<TitleComment>Comments</TitleComment>
				{data.map((obj, index) => {
					return (
						<Row key={index} style={{ marginBottom: scaleHeight(2) }}>
							<Avatar source={obj.avatar} />
							<Row style={{ marginLeft: scaleWidth(2) }}>
								<View style={styles.messageWrap}>
									<Row>
										<Name>{obj.name}</Name>
										<DateTime>{obj.date}</DateTime>
									</Row>
									<Content>{obj.content}</Content>
								</View>
							</Row>
						</Row>
					);
				})}
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	messageWrap: {
		height: scaleWidth(10),
		justifyContent: 'space-between'
	}
});

const TitleComment = styled.Text`
	color: #ffffff;
	font-weight: 600;
	fontSize: ${scaleWidth(3.5)};
	marginTop: ${scaleHeight(2)};
	marginBottom: ${scaleHeight(4)};
`;

const Avatar = styled.Image`
	width: ${scaleWidth(10)};
	height: ${scaleWidth(10)};
	border: 1px solid #ffffff;
	borderRadius: 50px;
`;

const Content = styled.Text`
	color: ${GlobalStyle.WHITE};
	fontSize: ${scaleWidth(3.5)};
`;

const DateTime = styled.Text`
	color: ${GlobalStyle.GREY};
	fontSize: ${scaleWidth(3.5)};
	marginLeft: ${scaleWidth(2)};
`;

const Name = styled.Text`
	color: ${GlobalStyle.YELLOW};
	fontSize: ${scaleWidth(3.5)};
	fontWeight: 600;
`;
