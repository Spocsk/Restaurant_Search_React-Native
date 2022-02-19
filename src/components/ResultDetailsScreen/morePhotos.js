import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Divider from '../Divider';

export default function MorePhotos({photos}) {
    return (
        <View>
            <Text style={styles.subtitle2}>Photos</Text>
            <Divider></Divider>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
      },
      subtitle2: {
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16
      },
})