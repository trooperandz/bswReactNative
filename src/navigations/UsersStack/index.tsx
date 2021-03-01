import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import UsersScreen from 'features/users/screens/UsersScreen';
import UserDetailScreen from 'features/users/screens/UserDetailScreen';
import BackArrowIcon from 'assets/back-arrow.svg';
import { UsersStackParamList } from './types';
import { styles } from './styles';

const Stack = createStackNavigator<UsersStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="UsersScreen"
      screenOptions={{
        headerBackImage: () => (
          <View style={styles.headerBackImage}>
            <BackArrowIcon width={24} height={24} fill="#000" />
          </View>
        ),
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{ headerTitle: 'Users' }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ headerTitle: 'User Details' }}
      />
    </Stack.Navigator>
  );
};
