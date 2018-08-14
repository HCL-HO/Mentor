import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DB from '_database/hello';
import SQliteTest from '_page/sqliteTest';

export default class Home extends Component {

    _goToSQlite() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text>HELLO HOME</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View>
                        <TouchableOpacity
                            style={styles.centerButton}
                            onPress={this._goToSQlite}
                        >
                            <Text>SQLITE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        backgroundColor: '#fffbb9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flex: 9,
        backgroundColor: '#ff8e6c',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    centerButton: {
        height: 50,
        marginHorizontal: '25%',
        backgroundColor: '#dae5ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});