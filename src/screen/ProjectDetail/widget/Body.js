import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TaskList from './TaskList';
import ScrollTabView from 'react-native-scrollable-tab-view';
import { data } from './data';

export default class Body extends Component {
	render() {
		const openData = data.filter((obj) => obj.state === 'Open');
		const processingData = data.filter((obj) => obj.state === 'Processing');
		const pendingData = data.filter((obj) => obj.state === 'Pending');
		const closeData = data.filter((obj) => obj.state === 'Close');

		return (
			<ScrollTabView initialPage={0} locked={false} renderTabBar={() => <View />}>
				<TaskList data={openData} state="Open" />
				<TaskList data={processingData} state="Processing" />
				<TaskList data={pendingData} state="Pending" />
				<TaskList data={closeData} state="Close" />
			</ScrollTabView>
		);
	}
}
