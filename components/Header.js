import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.header}>Pokemon</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        backgroundColor: '#3496eb',
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
    },
    header: {
        fontSize: 35,
        color: '#ffffff',
        fontFamily: 'monospace',
    },
});