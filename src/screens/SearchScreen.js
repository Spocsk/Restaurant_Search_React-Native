import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList'

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results] = useResults();


  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price
    })
  }

  return (
    <ScrollView>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => {searchApi(term)}} />
      <ResultList title='Peu chère' results={filterResultsByPrice('€')}></ResultList>
      <ResultList title='Un peu chère' results={filterResultsByPrice('€€')}></ResultList>
      <ResultList title='Très chère' results={filterResultsByPrice('€€€')}></ResultList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTotalResults: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
});

export default SearchScreen;
