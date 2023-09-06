import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../themes/colors';
import metrics from '../themes/metrics';

interface ItemProps {
  onPressItem: () => void;
  aspectRatio: number;
  photographer: string;
  imageSrc: ImageSourcePropType;
}
const ListItem = ({
  onPressItem,
  aspectRatio,
  photographer,
  imageSrc,
}: ItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPressItem}>
      <View style={styles.itemContainer}>
        <Image
          style={StyleSheet.flatten([
            styles.image as ImageStyle,
            {aspectRatio},
          ])}
          source={imageSrc}
        />
        <Text style={styles.text}>{photographer}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: metrics.size_20,
    marginVertical: metrics.size_10,
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.itemBackground,
    borderRadius: metrics.size_16,
    shadowColor: colors.shadow,
    shadowOffset: {width: metrics.size_2, height: metrics.size_10},
    shadowOpacity: 0.2,
    shadowRadius: metrics.size_5,
  },
  image: {
    width: '100%',
  },
  text: {
    fontSize: metrics.size_16,
    fontWeight: '500',
    marginTop: metrics.size_8,
    marginBottom: metrics.size_12,
    marginHorizontal: metrics.size_4,
  },
});
