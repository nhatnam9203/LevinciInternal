import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { scaleWidth, scaleHeight } from '@utils';
import { GlobalStyle } from '@utils/styles';
import { Text, TouchableOpacity, Animated } from 'react-native';
import { Row, RowBetween } from '@component';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import PopupSortBy from './PopupSortBy';
import NavigationServices from '@navigator/NavigationServices';
import PopupState from './PopupState';
import PopupStatus from './PopupStatus';
import PopupAssignee from './PopupAssignee';
import PopupPriority from './PopupPriority';

export default class header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isSerach: false,
			isPopupSortBy: false,
			isPopupState: false,
			isPopupStatus: false,
			isPopupAssignee: false,
			isPopupPriority: false,

			isSortCreatedTime: true,
			isSortUpdatedTime: false,
			isSortDueDateTime: false,
			heightHeader: new Animated.Value(scaleHeight(12))
		};
	}

	toggleSearch = async () => {
		const { isSerach } = this.state;
		await this.setState({
			isSerach: !isSerach
		});
		this.scaleHeightHeader();
	};

	openPopupSearchProject = () => {
		this.props.openPopupSearchProject();
	};

	openSortBy = () => {
		this.setState({ isPopupSortBy: true });
	};

	closeSortBy = () => {
		this.setState({ isPopupSortBy: false });
	};

	sortCreated = () => {
		this.setState({
			isSortCreatedTime: true,
			isSortUpdatedTime: false,
			isSortDueDateTime: false
		});
	};

	sortUpdated = () => {
		this.setState({
			isSortCreatedTime: false,
			isSortUpdatedTime: true,
			isSortDueDateTime: false
		});
	};

	sortDueDate = () => {
		this.setState({
			isSortCreatedTime: false,
			isSortUpdatedTime: false,
			isSortDueDateTime: true
		});
	};

	scaleHeightHeader = () => {
		const { heightHeader, isSerach } = this.state;
		if (isSerach) {
			Animated.timing(heightHeader, {
				toValue: scaleHeight(22),
				duration: 300
			}).start();
		} else {
			Animated.timing(heightHeader, {
				toValue: scaleHeight(12),
				duration: 300
			}).start();
		}
	};

	back = () => {
		NavigationServices.navigate('Task');
	};

	renderSearch() {
		const { valueSearch } = this.state;
		return (
			<React.Fragment>
				{/* Bar Search */}
				<SearchBar>
					<TouchBack onPress={this.toggleSearch}>
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
						placeholder="Search task"
						placeholderTextColor="#7B7B7C"
					/>
				</SearchBar>
				{/* Icon search */}
				<RowHeader>
					<ItemSearch onPress={this.togglePopupState}>
						<ItemSearch.Text> State </ItemSearch.Text>
						<FontAwesome
							style={{ marginLeft: scaleWidth(2) }}
							name="caret-down"
							color="#ffffff"
							size={scaleWidth(4)}
						/>
					</ItemSearch>
					<ItemSearch onPress={this.togglePopupStatus}>
						<ItemSearch.Text> Status </ItemSearch.Text>
						<FontAwesome
							style={{ marginLeft: scaleWidth(2) }}
							name="caret-down"
							color="#ffffff"
							size={scaleWidth(4)}
						/>
					</ItemSearch>
					<ItemSearch onPress={this.togglePopupAssignee}>
						<ItemSearch.Text> Assignee </ItemSearch.Text>
						<FontAwesome
							style={{ marginLeft: scaleWidth(2) }}
							name="caret-down"
							color="#ffffff"
							size={scaleWidth(4)}
						/>
					</ItemSearch>
					<ItemSearch onPress={this.togglePopupPrioroty}>
						<ItemSearch.Text> Priority </ItemSearch.Text>
						<FontAwesome
							style={{ marginLeft: scaleWidth(2) }}
							name="caret-down"
							color="#ffffff"
							size={scaleWidth(4)}
						/>
					</ItemSearch>
				</RowHeader>
			</React.Fragment>
		);
	}

	togglePopupState = () => {
		const { isPopupState } = this.state;
		this.setState({ isPopupState: !isPopupState });
	};

	togglePopupStatus = () => {
		const { isPopupStatus } = this.state;
		this.setState({ isPopupStatus: !isPopupStatus });
	};
	togglePopupAssignee = () => {
		const { isPopupAssignee } = this.state;
		this.setState({ isPopupAssignee: !isPopupAssignee });
	};
	togglePopupPrioroty = () => {
		const { isPopupPriority } = this.state;
		this.setState({ isPopupPriority: !isPopupPriority });
	};

	renderHeader() {
		const { isPopupSortBy, isSortCreatedTime, isSortDueDateTime, isSortUpdatedTime } = this.state;
		return (
			<RowBetween>
				<Row
					style={{
						alignItems: 'center'
					}}
				>
					<TouchableOpacity onPress={this.back}>
						<IonicIcon name="ios-arrow-round-back" size={scaleWidth(7)} color={GlobalStyle.YELLOW} />
					</TouchableOpacity>
					<Title>HarmonyPay</Title>
					<TouchableOpacity onPress={this.openPopupSearchProject} style={{ marginLeft: scaleWidth(1) }}>
						<FontAwesome name="caret-down" size={scaleWidth(4)} color={GlobalStyle.WHITE} />
					</TouchableOpacity>
				</Row>
				<Row>
					<Touch onPress={this.toggleSearch}>
						<IonicIcon name={'md-search'} color={GlobalStyle.YELLOW} size={scaleWidth(6)} />
					</Touch>
					<Touch onPress={this.openSortBy}>
						<Entypo name={'dots-three-vertical'} color={GlobalStyle.YELLOW} size={scaleWidth(5)} />
					</Touch>
				</Row>
				{isPopupSortBy && (
					<PopupSortBy
						isSortCreatedTime={isSortCreatedTime}
						isSortDueDateTime={isSortDueDateTime}
						isSortUpdatedTime={isSortUpdatedTime}
						sortCreated={this.sortCreated}
						sortUpdated={this.sortUpdated}
						sortDueDate={this.sortDueDate}
						closeSortBy={this.closeSortBy}
					/>
				)}
			</RowBetween>
		);
	}

	render() {
		const { isSerach, heightHeader, isPopupState, isPopupStatus, isPopupAssignee, isPopupPriority } = this.state;
		return (
			<Header
				as={Animated.View}
				style={{
					height: heightHeader
				}}
			>
				{isSerach && this.renderSearch()} 
                {!isSerach && this.renderHeader()}
				<PopupState isVisible={isPopupState} togglePopupState={this.togglePopupState} />
				<PopupStatus isVisible={isPopupStatus} togglePopupStatus={this.togglePopupStatus} />
				<PopupAssignee isVisible={isPopupAssignee} togglePopupAssignee={this.togglePopupAssignee} />
				<PopupPriority isVisible={isPopupPriority} togglePopupPrioroty={this.togglePopupPrioroty} />
			</Header>
		);
	}
}

const Header = styled.View`
	width: ${scaleWidth(100)};
	paddingLeft: ${scaleWidth(3)};
	paddingRight: ${scaleWidth(3)};
	paddingBottom: ${scaleHeight(1)};
	justify-content: flex-end;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	zIndex: 9999;
	backgroundColor: #2b2e33;
`;

const Title = styled.Text`
	color: #ffffff;
	fontWeight: 600;
	fontSize: ${scaleWidth(5)};
	marginLeft: ${scaleWidth(3)};
	letterSpacing: 0.3;
`;

const Touch = styled.TouchableOpacity`marginLeft: 10px;`;

const SearchBar = styled.View`
	width: 100%;
	/* height: ${scaleHeight(5)}; */
	flex-direction: row;
	alignItems: center;
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

const ItemSearch = styled.TouchableOpacity`
	flex-direction: row;
	backgroundColor: #1f2023;
	borderRadius: 20px;
	marginLeft: ${scaleWidth(3)};
	marginTop: ${scaleWidth(2)};
	padding: 5px 13px 5px 13px;
	align-items: center;
`;

ItemSearch.Text = styled.Text`
	color: #ffffff;
	fontSize: ${scaleWidth(3.5)};
`;

const RowHeader = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`;
