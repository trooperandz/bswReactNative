import React, { ReactChild } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: ReactChild;
  testID?: string;
};

export default (props: Props) => (
  <View style={styles.container} testID={props.testID}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
