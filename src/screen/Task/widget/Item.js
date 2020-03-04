import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { GlobalStyle } from '@utils/styles';
import { scaleWidth, scaleHeight } from '@utils';
import { ProgressBar } from 'react-native-paper';
import NavigationServices from '@navigator/NavigationServices';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Item extends Component {

	navigateToProjectDetail=()=>{
		NavigationServices.navigate('ProjectDetail');
	}

	render() {
		const { logoText, rate, titleProject, colorBar, colorProject } = this.props;
		return (
			<React.Fragment>
				<Row onPress={this.navigateToProjectDetail}>
					<LogoProjects backgroundColor={colorProject}>
						<LogoProjects.Text>{logoText}</LogoProjects.Text>
					</LogoProjects>

					<TaskContent>
						<TaskTitle>{titleProject}</TaskTitle>
						<View>
							<Rate Color={colorBar}>{rate}</Rate>
							<ProgressBar
								style={{
									height: 8,
									borderRadius: 1
								}}
								progress={0.7}
								color={colorBar}
							/>
						</View>
					</TaskContent>

					<TouchTreeDot>
						<MaterialCommunityIcons name="dots-vertical" size={scaleWidth(6)} color={'#888888'} />
					</TouchTreeDot>
				</Row>
			</React.Fragment>
		);
	}
}

const Row = styled.TouchableOpacity`
	flex-direction: row;
	marginTop: ${scaleHeight(4)};
`;

const LogoProjects = styled.View`
	width: ${scaleWidth(14)};
	height: ${scaleWidth(14)};
	justify-content: center;
	align-items: center;
	borderRadius: 50;
	backgroundColor: ${(props) => props.backgroundColor};
`;

LogoProjects.Text = styled.Text`
	color: ${GlobalStyle.WHITE};
	font-size: ${scaleWidth(4)};
	font-weight: 700;
	letter-spacing: 0.3;
`;

const TaskContent = styled.View`
	justify-content: space-between;
	marginLeft: ${scaleWidth(2)};
	width: ${scaleWidth(66)};
`;

const TaskTitle = styled.Text`
	color: ${GlobalStyle.WHITE};
	font-size: ${scaleWidth(4)};
	font-weight: bold;
`;

const Rate = styled.Text`
	color: ${(props) => props.Color};
	fontSize: ${scaleWidth(2.5)};
	font-style: italic;
`;

const TouchTreeDot = styled.TouchableOpacity`
	justify-content: center;
	align-items: flex-end;
	width: ${scaleWidth(12)};
	height: ${scaleWidth(14)};
`;
