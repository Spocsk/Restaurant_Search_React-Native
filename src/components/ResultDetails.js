import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ResultDetails = ({result}) => {
  return (
    <View>
        {
          result.image_url ? 
          <Image style={styles.image} source={{uri: result.image_url}}/> :
          <View style={styles.imageNotFound}>
            <Text>Aucune image</Text>
          </View>
        }
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.subtitle}>{result.rating} ⭐️ | {result.review_count} commentaires</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    title: {
        fontWeight: '800',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    subtitle: {
        fontWeight: '400',
        marginLeft: 10,
        fontSize: 12
    },
    imageNotFound: {
      width: 250,
      height: 120,
      borderRadius: 4,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: 'rgba(120,120,120,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default ResultDetails;
