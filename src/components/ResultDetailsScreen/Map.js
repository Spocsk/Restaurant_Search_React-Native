import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Divider from '../Divider';

export default function Map({coordinates}) {
    return (
        <View style={styles.mapContainer}>
            <Text style={styles.subtitle2}>Maps</Text>
            <Divider></Divider>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
            }}>
                <Marker
                    coordinate={coordinates}
                    title={'Restaurant'}
                />
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
      subtitle2: {
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16
      },
      mapContainer: {
        width: '100%',
        height: 250,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 50
      },
      map: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
      }
})