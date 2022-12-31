import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootScreens from './screens/index';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootScreens />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
