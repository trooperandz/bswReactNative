import React, { ReactChild } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';

type Props = {
  children: ReactChild;
};

export default (props: Props) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
