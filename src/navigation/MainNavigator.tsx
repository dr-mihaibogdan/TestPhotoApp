import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {PhotoData} from '../models/api/PhotoData';
import RouteNames from '../models/navigation/RouteNames';
import FeedScreen from '../screens/FeedScreen';
import ImageDetailsScreen from '../screens/ImageDetailsScreen';

export type MainNavigatorParamList = {
  [RouteNames.FeedScreen]: undefined;
  [RouteNames.ImageDetailsScreen]: {item: PhotoData};
};

const Stack = createStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={FeedScreen}
        options={{headerShown: false}}
        name={RouteNames.FeedScreen}
      />
      <Stack.Screen
        component={ImageDetailsScreen}
        options={{headerShown: false}}
        name={RouteNames.ImageDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
