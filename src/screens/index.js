import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootStack from '../navigation/index';

const RootScreens = () => {
  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
};

export default RootScreens;

const styles = StyleSheet.create({});
