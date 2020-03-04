import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import {} from 'react-native';
import { scaleWidth, scaleHeight } from '@utils';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntDeSign from 'react-native-vector-icons/AntDesign';
import NavigationServices from '@navigator/NavigationServices';

export default class header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isSearch: false,
			valueSearch: ''
		};
	}

	openSearch = () => {
		this.setState({ isSearch: true });
	};

	closeSearch = () => {
		this.setState({ isSearch: false });
	};

	navigateToAddTask = () => {
		NavigationServices.navigate('TaskAdd');
	};

	renderSearch() {
		const { valueSearch } = this.state;
		return (
			<SearchBar>
				<TouchBack onPress={this.closeSearch}>
					<IonicIcon
						name="ios-arrow-round-back"
						style={{ fontWeight: 'bold' }}
						color={GlobalStyle.YELLOW}
						size={scaleWidth(7)}
					/>
				</TouchBack>
				<InputSearch
					value={valueSearch}
					onChangeText={(valueSearch) => this.setState({ valueSearch })}
					placeholder="Search project"
					placeholderTextColor="#7B7B7C"
				/>
			</SearchBar>
		);
	}

	renderHeader() {
		return (
			<React.Fragment>
				<Touch onPress={this.openSearch}>
					<IonicIcon name={'md-search'} color={GlobalStyle.YELLOW} size={scaleWidth(6)} />
				</Touch>

				<Title>Projects</Title>

				<Touch onPress={this.navigateToAddTask}>
					<AntDeSign name={'plus'} color={GlobalStyle.YELLOW} size={scaleWidth(6)} />
				</Touch>
			</React.Fragment>
		);
	}

	render() {
		const { isSearch } = this.state;
		return (
			<Header>
				{isSearch && this.renderSearch()}
				{!isSearch && this.renderHeader()}
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
	padding-top: ${scaleHeight(7)};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
	padding-left: ${scaleWidth(3)};
	padding-right: ${scaleWidth(3)};
`;

const Title = styled.Text`
	color: ${GlobalStyle.WHITE};
	font-size: ${scaleWidth(5)};
	font-weight: 600;
	letter-spacing: 0.3;
`;

const Touch = styled.TouchableOpacity``;

const SearchBar = styled.View`
	width: 100%;
	height: ${scaleHeight(5)};
	flex-direction: row;
`;

const TouchBack = styled.TouchableOpacity`
	paddingTop: ${scaleWidth(1)};
	/* justify-content: center;
	align-items: center; */
`;

const InputSearch = styled.TextInput`
	flex: 1;
	padding: 10px;
	background-color: #2b2e33;
	color: #7b7b7c;
	font-size: ${scaleWidth(4)};
`;
