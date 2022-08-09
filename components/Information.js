import { Text, View,Image, StyleSheet } from 'react-native';
import { Card,Title, Paragraph } from 'react-native-paper';


export default function Information({ image, name, description }) {
  return (
    <View>
      <Card>
        <Card.Cover source={{ uri: image }} />
      </Card>
      <Card>
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  )
}