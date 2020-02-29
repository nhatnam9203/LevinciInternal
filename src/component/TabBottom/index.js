import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight, slop } from '@utils';
import styled from 'styled-components/native';
import images from '@assets/images';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import { iconList } from './IconList';
import ConnectRedux from '@reduxApp/ConnectRedux';
import NavigationServices from '@navigator/NavigationServices';

const initialState = {
	isOpenUp: false,
	height: new Animated.Value(scaleHeight(10)),
	activeItem: 'Work',
	currentIcons: [
		{
			name: 'Task',
			Icon: images.Task,
			IconInActive: images.TaskInActive,
			navigate: () => NavigationServices.navigate('Task')
		},
		{
			name: 'Work',
			Icon: images.Work,
			IconInActive: images.WorkInActive,
			navigate: () => NavigationServices.navigate('Work')
		},
		{
			name: 'Mail',
			Icon: images.Mail,
			IconInActive: images.MailInActive,
			navigate: () => NavigationServices.navigate('Mail')
		}
	],
	indexActive: 1
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
		const { isOpenUp } = this.state;
		this.checkOpenBottom();
		this.setState({
			isOpenUp: !isOpenUp
		});
	};

	checkOpenBottom = () => {
		const { isOpenUp } = this.state;
		if (!isOpenUp) {
			Animated.timing(this.state.height, {
				toValue: scaleHeight(32),
				duration: 200
			}).start();
		} else {
			Animated.timing(this.state.height, {
				toValue: scaleHeight(10),
				duration: 200
			}).start();
		}
	};

	resetState = () => {
		this.setState(initialState);
	};

	componentWillUnmount() {
		this.resetState();
	}

	setActiveIndex = (index) => {
		this.setState({ indexActive: index });
	};

	setActiveItem = (item) => {
		this.setState({
			activeItem: item.name
		});
		item.navigate();
	};

	setCurrentItems = (item) => {
		let { currentIcons, indexActive } = this.state;
		const _pos = currentIcons.findIndex((obj) => obj.name === item.name);
		if (_pos !== -1) return;
		currentIcons[indexActive] = item;
		this.setState({ currentIcons });
	};

	renderItemOpenUp() {
		const { activeItem } = this.state;
		return iconList.map((icon, index) => {
			return (
				<Item
					key={index + 'itemBottom'}
					onPress={() => {
						this.setActiveItem(icon);
						this.setCurrentItems(icon);
						this.toggleOpenUp();
					}}
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
		const { currentIcons, activeItem } = this.state;
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
		const { isOpenUp } = this.state;

		return (
			<Animated.View
				style={[
					styles.container,
					{
						height: this.state.height,
						paddingTop: isOpenUp ? scaleWidth(2) : 0
					}
				]}
			>
				{!isOpenUp && this.renderItemOpenDown()}
				{isOpenUp && this.renderItemOpenUp()}

				<TouchArrow hitSlop={slop} onPress={this.toggleOpenUp}>
					<FontAweSome name={isOpenUp ? 'caret-down' : 'caret-up'} color={'white'} size={scaleWidth(5.5)} />
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

const Row = styled.View`flex-direction: row;`;

const TouchArrow = styled(Item)`
    width: ${scaleWidth(9)};
    height: ${scaleWidth(9)};
    border-radius: ${scaleWidth(10)};
    position: absolute;
    top: -${scaleWidth(4)};
    left: ${scaleWidth(45.5)};
    background-color: ${GlobalStyle.YELLOW};
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
	tabBottoms: state.tabBottom.data,
	test: state.tabBottom.test
});

export default ConnectRedux(mapStateToProps, TabBottom);
