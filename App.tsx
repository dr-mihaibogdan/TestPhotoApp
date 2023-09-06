/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import {store} from './src/store/store';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={StyleSheet.flatten([styles.container, backgroundStyle])}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
