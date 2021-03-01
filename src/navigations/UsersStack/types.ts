import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { User } from 'features/users/usersSlice/types';

export type UsersStackParamList = {
  UsersScreen: undefined; // no params
  UserDetailScreen: { user: User };
};

export type UsersStackNavProps<T extends keyof UsersStackParamList> = {
  navigation: StackNavigationProp<UsersStackParamList, T>;
  route: RouteProp<UsersStackParamList, T>;
};
