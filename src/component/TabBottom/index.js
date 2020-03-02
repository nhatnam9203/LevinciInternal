import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight, slop } from '@utils';
import styled from 'styled-components/native';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import { iconList } from './IconList';
import ConnectRedux from '@reduxApp/ConnectRedux';

const initialState = {
};

class TabBottom extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	navigateToSetting = () => {
		this.props.navigation.navigate('Setting');
	};

	navigateToHome = () => {
		this.props.navigation.navigate('Home');
	};

	toggleOpenUp = () => {
		this.checkOpenBottom();
		this.props.actions.app.toggleBottom();
	};

	checkOpenBottom = () => {
		const { isOpenBottom,height } = this.props;
		if (!isOpenBottom) {
			Animated.timing(height, {
				toValue: scaleHeight(32),
				duration: 200
			}).start();
		} else {
			Animated.timing(height, {
				toValue: scaleHeight(10),
				duration: 200
			}).start();
		}
	};

	resetState = () => {
		this.setState(initialState);
	};

	closePopup = () => {
		this.checkOpenBottom();
		this.props.actions.app.toggleBottom();
	};

	setActiveIndex = (index) => {
		this.props.actions.app.setActiveIndex(index);
	};

	setActiveItem = (item) => {
		this.props.actions.app.setActiveItem(item);
		item.navigate();
	};

	setCurrentItems = (item) => {
		this.props.actions.app.setCurrentItems(item);
	};

	renderItemOpenUp() {
		const { activeItem } = this.props;
		return iconList.map((icon, index) => {
			return (
				<Item
					key={index + 'itemBottom'}
					onPress={() => {
						this.setActiveItem(icon);
						this.setCurrentItems(icon);
						this.toggleOpenUp();
					}}
					disabled={index == 6}
				>
					<IconOpenup source={activeItem === icon.name ? icon.Icon : icon.IconInActive} />
					<TextOpenUp Color={activeItem === icon.name ? GlobalStyle.YELLOW : GlobalStyle.WHITE}>
						{icon.name}
					</TextOpenUp>
				</Item>
			);
		});
	}

	renderItemOpenDown() {
		const { currentIcons, activeItem } = this.props;
		return currentIcons.map((icon, index) => {
			return (
				<Item
					key={index}
					onPress={() => {
						this.setActiveItem(icon);
						this.setActiveIndex(index);
					}}
				>
					<Icon source={activeItem === icon.name ? icon.Icon : icon.IconInActive} />
				</Item>
			);
		});
	}

	render() {
		const { isOpenBottom,height } = this.props;
		return (
			<Animated.View
				style={[
					styles.container,
					{
						height: height,
						paddingTop: isOpenBottom ? scaleHeight(3) : 5
					}
				]}
			>
				{!isOpenBottom && this.renderItemOpenDown()}
				{isOpenBottom && this.renderItemOpenUp()}

				<TouchArrow hitSlop={slop} onPress={this.toggleOpenUp}>
					<FontAweSome
						name={isOpenBottom ? 'caret-down' : 'caret-up'}
						color={'white'}
						size={scaleWidth(5.5)}
					/>
				</TouchArrow>
			</Animated.View>
		);
	}
}

const Item = styled.TouchableOpacity`
	width: ${scaleWidth(100) / 3};
	height: ${scaleHeight(10)};
	justify-content: center;
	align-items: center;
`;

const IconOpenup = styled.Image`
	width: ${scaleWidth(6)};
	height: ${scaleWidth(6)};
`;

const TextOpenUp = styled.Text`
	font-size: ${scaleWidth(3)};
	color: ${(props) => props.Color};
	marginTop: ${scaleWidth(1)};
	font-weight: 600;
`;

const TouchArrow = styled(Item)`
    width: ${scaleWidth(9)};
    height: ${scaleWidth(9)};
    border-radius: ${scaleWidth(10)};
    position: absolute;
    top: -${scaleWidth(4)};
    left: ${scaleWidth(45.5)};
    background-color: #E9AF28;
    zIndex: 999;
`;

const Icon = styled.Image`
	width: ${scaleWidth(6)};
	height: ${scaleWidth(6)};
`;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: GlobalStyle.BLACK,
		height: 300,
		position: 'relative',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: -1
		},
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 9,
		height: scaleHeight(10),
		zIndex: 999,
		flexWrap: 'wrap'
	}
});

const mapStateToProps = (state) => ({
	isOpenBottom: state.tabBottom.isOpenBottom,
	activeItem : state.tabBottom.activeItem,
	height : state.tabBottom.height,
	indexActive : state.tabBottom.indexActive,
	currentIcons : state.tabBottom.currentIcons
});

export default ConnectRedux(mapStateToProps, TabBottom);
