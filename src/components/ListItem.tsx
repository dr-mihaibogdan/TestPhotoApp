import React, {useMemo} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../themes/colors';
import metrics from '../themes/metrics';
import getColorContrast from '../util/getColorContrast';
import TextWithTitle from './TextWithTitle';

interface ItemProps {
  onPressItem: () => void;
  aspectRatio: number;
  photographer: string;
  imageSrc: ImageSourcePropType;
  backgroundColor: string;
}
const ListItem = ({
  onPressItem,
  aspectRatio,
  photographer,
  imageSrc,
  backgroundColor,
}: ItemProps) => {
  const itemTextColor = useMemo(
    () => getColorContrast(backgroundColor),
    [backgroundColor],
  );
  return (
    <TouchableWithoutFeedback onPress={onPressItem}>
      <View
        style={StyleSheet.flatten([styles.itemContainer, {backgroundColor}])}>
        <Image
          style={StyleSheet.flatten([
            styles.image as ImageStyle,
            {aspectRatio},
          ])}
          source={imageSrc}
        />
        <TextWithTitle
          color={itemTextColor}
          title={'Photographer: '}
          value={photographer}
          style={styles.text}
        />
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
    marginTop: metrics.size_8,
    marginBottom: metrics.size_12,
    marginHorizontal: metrics.size_4,
  },
});
