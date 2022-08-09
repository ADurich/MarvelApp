import * as React from 'react';
import { Text, View,  Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 204,
  },
  text: {
    width: 132,
    height: 45,
    color: 'grey',
    fontWeight:'600',
    fontSize: 18,
    lineHeight:25,
    textAlign:'center',
  },
});

export default function CharacterCard({image, name, id}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity style={{display: 'flex',alignItems:'center'
    ,backgroundColor: "black"}} 		
			onPress={() => navigation.navigate('Detail',{ id:id})}
	>
			<Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
