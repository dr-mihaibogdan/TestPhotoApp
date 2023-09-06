import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import metrics from '../themes/metrics';
type Props = {
  color?: string;
  value: string;
  title: string;
  style?: TextStyle;
};

const TextWithTitle = ({color, style, title, value}: Props) => {
  return (
    <Text style={StyleSheet.flatten([styles.title, style, {color}])}>
      {title}
      <Text style={styles.value}>{value}</Text>
    </Text>
  );
};

export default TextWithTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: metrics.size_16,
    fontWeight: '600',
  },
  value: {
    fontWeight: '400',
  },
});
