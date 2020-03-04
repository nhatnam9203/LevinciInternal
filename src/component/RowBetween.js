import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class RowBetween extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' , justifyContent : 'space-between', position : 'relative'}}>
                {this.props.children}
            </View>
        )
    }
}
