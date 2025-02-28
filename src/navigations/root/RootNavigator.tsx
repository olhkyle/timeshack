import React from 'react';
import {StyleSheet} from 'react-native';
import MainBottomTabsNavigator from '../drawer/MainBottomTabsNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

function RootNavigator() {
  const isLoggedIn = true;

  return (
    <>{isLoggedIn ? <MainBottomTabsNavigator /> : <AuthStackNavigator />}</>
  );
}

const styles = StyleSheet.create({});

export default RootNavigator;
