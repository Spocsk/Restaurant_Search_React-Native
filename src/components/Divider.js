import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <View style={styles.divider}></View>
  );
};

const styles = StyleSheet.create({
    divider: {
        width: '90%',
        height: 2,
        backgroundColor: 'rgb(228,228,228)',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default Divider;
