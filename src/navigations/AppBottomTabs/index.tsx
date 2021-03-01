import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UsersStack from 'navigations/UsersStack';
import SettingsScreen from 'features/settings/screens/SettingsScreen';
import MetricsScreen from 'features/metrics/screens/MetricsScreen';
import { Icon } from 'react-native-eva-icons';
import { AppBottomTabsParamList } from './types';

const Tab = createBottomTabNavigator<AppBottomTabsParamList>();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Users"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let fill = focused ? '#0071e9' : '#424242';

          switch (route.name) {
            case 'Users':
              iconName = 'person-outline';
              break;
            case 'Metrics':
              iconName = 'pie-chart-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} width={24} height={24} fill={fill} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0071e9',
        inactiveTintColor: '#424242',
      }}>
      <Tab.Screen name="Users" component={UsersStack} />
      <Tab.Screen name="Metrics" component={MetricsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
