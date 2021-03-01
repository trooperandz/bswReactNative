import React from 'react';
import { Text, StyleSheet } from 'react-native';

import CenterView from 'components/CenterView';

export default () => {
  return (
    <CenterView>
      <Text style={styles.text}>Settings Screen</Text>
    </CenterView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
