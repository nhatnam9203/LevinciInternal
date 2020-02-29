
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppNavigators from './src/navigation';
import configureStore from './src/redux/store';
import { name as appName } from './app.json';
import NavigatorServices from './src/navigation/NavigationServices'

console.disableYellowBox = true;

class App extends Component {
	render() {
		const { store, persistor } = configureStore();
		return (
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					<AppNavigators
						ref={(navigatorRef) => {
							NavigatorServices.setContainer(navigatorRef);
						}}
					/>
				</PersistGate>
			</Provider>
		);
	}
}

AppRegistry.registerComponent(appName, () => App);
