import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import yelp from '../api/yelp'
import MoreInfos from '../components/ResultDetailsScreen/moreInfos'
import MorePhotos from '../components/ResultDetailsScreen/morePhotos'
import Map from '../components/ResultDetailsScreen/Map'

const SearchScreen = ({navigation}) => {

  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if(!result) return null

  return (
    <ScrollView>
      {
      result.image_url ? 
      <Image style={styles.herobanner} source={{uri: result.image_url}}/> :
      <View style={styles.imageNotFound}>
        <Text>Aucune image</Text>
      </View>
      }

      <MoreInfos
        name={result.name}
        location={result.location.display_address[0]}
        city={result.location.display_address[1]}
        phone={result.phone}
        categories={result.categories[0].title}
      ></MoreInfos>
      
      <MorePhotos photos={result.photos}></MorePhotos>
      <Map coordinates={result.coordinates}></Map>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  herobanner: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
});

export default SearchScreen;
