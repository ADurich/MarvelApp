import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator,FlatList, Alert } from 'react-native';
import CharacterCard from './CharacterCard';
import apiParams from '../config.js';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';

export default function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const { ts, apikey, hash, baseURL } = apiParams;
  const [currentLimit, setCurrentLimit] = useState(100);

  function searchCharacter(){
    if(search) {
        setLoading(true);
        axios.get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash,
            nameStartsWith: search
          }
        })
          .then(response => setData(response.data.data.results))
          .catch(error => console.error(error))
          .finally(() => setLoading(false));
      }
    }

  useEffect(() => {
    //const getCharacters = () => {
      //axios.get(`${baseURL}/v1/public/characters?ts=${ts}&&apikey=${apikey}&&hash=${hash}`)
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit:currentLimit
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
      //};
  }, []);

  //const loadMoreItem = () => {
    //setCurrentLimit(currentLimit + 20);
  //};

  //useEffect(() => {
    //getCharacters();
  //}, [currentLimit]);

  return (
    <View>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <>
            <Searchbar
              placeholder="Search for character..."
              onChangeText={value => setSearch(value)}
              value={search}
              onIconPress={searchCharacter}
              onSubmitEditing={searchCharacter}
            />
            <FlatList
              data={data}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <CharacterCard 
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                  name={item.name} />
              )}
              //ListFooterComponent={<ActivityIndicator size="large" color="#00ff00" />}
              //onEndReached={loadMoreItem}
              //onEndReachedThreshold={0}
              
            />
          </>
        )
      }
    </View>
  );
}