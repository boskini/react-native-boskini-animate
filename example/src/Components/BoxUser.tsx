import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'

export default () => {

    return (
        <View style={styles.box}>
            <View>
                <Image source={require('../../assets/GigiPaps.png')} style={styles.avatar}></Image>
            </View>
            <View style={{ paddingLeft: 15, justifyContent: 'space-evenly' }}>
                <Text style={styles.name}>Rafael Boschini</Text>
                <Text style={styles.title}>Full-Stack Developer</Text>
                <Text style={styles.contact}>rafaelboschini@gmail.com</Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#22333B'
    },
    name: {
        fontSize: 20,
        color: '#22333B'
    },
    title: {
        fontSize: 14,
        marginBottom: 5
    },
    contact: {
        fontSize: 15,
        color: '#22333B'
    },
    box: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#eeeeee'
    }
});