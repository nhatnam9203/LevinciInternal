import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import {Header,Body} from './widget'

export default class index extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Body />
            </Container>
        )
    }
}

const Container = styled.ImageBackground`
	flex: 1;
	backgroundColor: rgba(0, 0, 0, 0.5);
`;