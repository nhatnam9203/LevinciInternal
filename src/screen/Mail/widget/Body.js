import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import Email from './Email';
export default class Body extends PureComponent {
	render() {
		return (
			<Container>
				<ScrollView
					style={{
						padding: 5
					}}
					showsVerticalScrollIndicator={false}
				>
					<Email />
					<Email />
					<Email isRead />
					<Email isRead />
					<Email />
					<Email />
				</ScrollView>
			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	backgroundColor: #2b2e33;
	padding: 15px;
`;
