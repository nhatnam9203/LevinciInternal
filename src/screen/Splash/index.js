import React, { Component } from 'react';
import { Text, View, ImageBackground, ActivityIndicator } from 'react-native';

export default class Splash extends Component {
	componentDidMount() {
        this.checkFlow();
    }

    checkFlow(){
        this.props.navigation.navigate('Auth');
    }

	render() {
		return (
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<ActivityIndicator size="large" color="#333" />
			</View>
		);
	}
}
