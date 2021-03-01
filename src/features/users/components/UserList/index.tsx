import React from 'react';
import { FlatList } from 'react-native';

import UserCard from '../UserCard';
import { User } from 'features/users/usersSlice/types';

type Props = {
  users: Array<User>;
};

export default (props: Props) => {
  const { users } = props;

  const renderItem = ({ item }: { item: User }) => {
    return <UserCard user={item} />;
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.name}
      renderItem={renderItem}
    />
  );
};
