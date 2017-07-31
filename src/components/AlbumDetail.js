import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  let album = props.album;
  let { headerContentStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image  />
        </View>
        <View style={headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

export default AlbumDetail;