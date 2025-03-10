import React from 'react';
import MainBottomTabsNavigator from '../drawer/MainBottomTabsNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

function RootNavigator() {
  const isLoggedIn = true;

  return (
    <>{isLoggedIn ? <MainBottomTabsNavigator /> : <AuthStackNavigator />}</>
  );
}

export default RootNavigator;
