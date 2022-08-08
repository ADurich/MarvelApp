import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default function Comic({ name, image }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: image}}
      />
      <Text>{name}</Text>
    </View>
  )
}