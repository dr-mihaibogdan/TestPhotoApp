import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';
import ListSeparator from '../components/ListSeparator';
import {PhotoData} from '../models/api/PhotoData';
import RouteNames from '../models/navigation/RouteNames';
import {MainNavigatorParamList} from '../navigation/MainNavigator';
import {useGetCuratedPhotosQuery} from '../services/Api';
import colors from '../themes/colors';

type FeedScreenProps = StackScreenProps<
  MainNavigatorParamList,
  RouteNames.FeedScreen
>;

const FeedScreen = ({navigation}: FeedScreenProps) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const {data, isLoading, refetch} = useGetCuratedPhotosQuery(page);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setPhotos(currentList => {
      if (!isLoading && data && data.photos) {
        if (page === 1) {
          return [...data.photos];
        }
        return [...currentList, ...data.photos];
      }
      return [];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  const handlePressItem = (item: PhotoData) => () => {
    navigation.navigate(RouteNames.ImageDetailsScreen, {
      item,
    });
  };

  const handleRefresh = () => {
    () => {
      setPage(1);
      refetch();
    };
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderItem = ({item}: {item: PhotoData}) => {
    return (
      <ListItem
        onPressItem={handlePressItem(item)}
        backgroundColor={item.avg_color}
        aspectRatio={item.width / item.height}
        imageSrc={{uri: item.src.large}}
        photographer={item.photographer}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        contentContainerStyle={{paddingTop: insets.top}}
        refreshControl={
          <RefreshControl
            refreshing={isLoading && page === 1}
            onRefresh={handleRefresh}
          />
        }
        onEndReached={handleLoadMore}
        ItemSeparatorComponent={ListSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default FeedScreen;
