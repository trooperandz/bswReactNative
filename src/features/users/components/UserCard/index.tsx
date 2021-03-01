import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';

import * as RootNavigation from 'utils/navigation';
import { styles } from './styles';
import { User } from 'features/users/usersSlice/types';
import colors from 'utils/colors';

type Props = {
  user: User;
};

export default (props: Props) => {
  const { user } = props;

  return (
    <TouchableOpacity
      key={user.name}
      style={styles.card}
      onPress={() => RootNavigation.navigate('UserDetailScreen', { user })}
      testID="user-card">
      <View>
        <Icon name="person" width={24} height={24} fill={colors.primary} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </TouchableOpacity>
  );
};
