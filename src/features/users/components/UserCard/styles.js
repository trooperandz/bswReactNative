import { StyleSheet } from 'react-native';

import colors from 'utils/colors';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.surfacePrimary,
  },
  name: {
    marginBottom: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  email: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  textWrapper: {
    marginLeft: 14,
  },
});
