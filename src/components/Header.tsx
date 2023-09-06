import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../themes/colors';
import metrics from '../themes/metrics';

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={StyleSheet.flatten([styles.container, {height: insets.top + 50}])}>
      <Text style={styles.backButton} onPress={goBack}>
        {'<'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBottom: metrics.size_10,
    paddingHorizontal: metrics.size_20,
    borderBottomColor: colors.headerBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {fontWeight: '800'},
});

export default Header;
