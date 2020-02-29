import React, { PureComponent } from 'react';
import Text from './Text';
import { scaleWidth, scaleHeight } from '../utils';
import Configs from '../configs';
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
const { COLOR_MAIN_APP: { ORANGE, WHITE } } = Configs;

export default class ButtonDefault extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			width,
			height,
			border,
			backgroundColor,
			title,
			textColor,
			style,
			styleText,
			fontsize,
			i18nKey,
			onPress = () => console.log()
		} = this.props;
		const temtpHeight = height ? height : '7%';
		const temtpWidth = width ? width : '40%';
		const temtpBorder = border ? border : 5;
		const temtpBackgroundColor = backgroundColor ? backgroundColor : ORANGE;
		const temtpTextColor = textColor ? textColor : WHITE;
		const temtpFontsize = fontsize ? fontsize : '2%';
		const { i18n } = this.state;
		return (
			<View style={{ alignItems: 'center' }}>
				<TouchableRipple
					onPress={onPress}
					style={[
						{
							flexDirection: 'row',
							width: scaleWidth(temtpWidth),
							height: scaleHeight(temtpHeight),
							backgroundColor: temtpBackgroundColor,
							borderRadius: temtpBorder,
							justifyContent: 'center',
							alignItems: 'center'
						},
						style
					]}
				>
					<Text
						style={[
							{ color: temtpTextColor, fontWeight: 'bold', fontSize: scaleWidth(temtpFontsize) },
							styleText
						]}
					>
						{title}
					</Text>
				</TouchableRipple>
			</View>
		);
	}
}
