import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Divider from '../Divider';

export default function MoreInfos({name, location, city, phone, categories}) {
    return (
        <View>
            <Text style={styles.subtitle2}>Description</Text>
            <Divider></Divider>

            <Text style={styles.title}>{`${name} (${categories})`}</Text>
            <Text style={styles.subtitle}>{`${city}, ${location}`}</Text>
            <Text style={styles.subtitle}>{`${phone}`}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10
      },
      subtitle: {
        fontWeight: '400',
        marginLeft: 10,
        marginVertical: 10,
        fontSize: 13
      },
      subtitle2: {
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16
      },
})