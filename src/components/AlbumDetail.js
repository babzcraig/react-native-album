import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  let { title, artist, thumbnail_image } = album
  let { headerContentStyle, imageThumbStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
              style={imageThumbStyle}
              source={{ uri: thumbnail_image }}  />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageThumbStyle: {
    height: 50,
    width: 50
  }
});

export default AlbumDetail;