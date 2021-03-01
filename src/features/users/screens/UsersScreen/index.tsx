import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SafeAreaView from 'components/SafeAreaView';
import UserList from 'features/users/components/UserList';
import { getUsers } from 'features/users/usersSlice';
import { UserSliceState } from 'features/users/usersSlice/types';
import { styles } from './styles';

export default () => {
  const users = useSelector((state: UserSliceState) => state.users.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {users.length ? (
          <UserList users={users} />
        ) : (
          <View testID="users-loading-view">
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
