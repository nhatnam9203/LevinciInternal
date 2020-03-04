import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Row extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems : 'center',position : 'relative'}}>
                {this.props.children}
            </View>
        )
    }
}
