import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { navigationRef } from 'utils/navigation';
import AppBottomTabs from './AppBottomTabs';

export const RootNavigation = () => (
  // <SafeAreaProvider>
  <NavigationContainer ref={navigationRef}>
    <AppBottomTabs />
  </NavigationContainer>
  // </SafeAreaProvider>
);
