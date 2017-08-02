import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  let { title, artist, thumbnail_image, image } = album
  let { headerContentStyle,
        imageThumbStyle,
        imageThumbContainerStyle,
        headerTextStyle,
        albumArtworkStyle
      } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageThumbContainerStyle}>
          <Image
              style={imageThumbStyle}
              source={{ uri: thumbnail_image }}  />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumArtworkStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  )
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageThumbStyle: {
    height: 50,
    width: 50
  },
  imageThumbContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumArtworkStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;