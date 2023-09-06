import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
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
        <Image style={styles.image} source={{uri: item.src.large}} />
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
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default ImageDetailsScreen;
