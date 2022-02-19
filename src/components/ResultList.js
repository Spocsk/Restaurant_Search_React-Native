import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';
import Divider from './Divider';

const ResultList = ({title, results, navigation}) => {
  return (
    <View>
        <Text style={styles.textTitle}>{title} ({results.length})</Text>
        <Divider />
        <FlatList
            style={styles.flatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
                  <ResultDetails result={item} />
                </TouchableOpacity>
                ) 
            }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    textTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 20
    },
    flatList: {
      marginBottom: 20
    }
});

export default withNavigation(ResultList);
