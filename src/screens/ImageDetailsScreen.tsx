import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import TextWithTitle from '../components/TextWithTitle';
import RouteNames from '../models/navigation/RouteNames';
import {MainNavigatorParamList} from '../navigation/MainNavigator';
import colors from '../themes/colors';
import metrics from '../themes/metrics';

type ImageDetailsNavProps = StackScreenProps<
  MainNavigatorParamList,
  RouteNames.ImageDetailsScreen
>;

const ImageDetailsScreen = ({route}: ImageDetailsNavProps) => {
  const {item} = route.params;
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.container}>
        <Image
          style={StyleSheet.flatten([
            styles.image,
            {aspectRatio: item.width / item.height},
          ])}
          source={{uri: item.src.large}}
        />
        <TextWithTitle
          style={styles.text}
          title={'Shot by: '}
          value={item.photographer}
        />
        <TextWithTitle style={styles.text} title={'Title: '} value={item.alt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: metrics.size_20,
  },
  text: {
    marginBottom: metrics.size_8,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    marginBottom: metrics.size_10,
    marginTop: metrics.size_20,
    borderRadius: metrics.size_16,
  },
});

export default ImageDetailsScreen;
