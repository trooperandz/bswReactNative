import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from 'utils/navigation';
import AppBottomTabs from './AppBottomTabs';

export const RootNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <AppBottomTabs />
  </NavigationContainer>
);
