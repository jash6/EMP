import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from '../screens/Home';
import {Provider} from 'react-redux';
import {Store} from '../redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
