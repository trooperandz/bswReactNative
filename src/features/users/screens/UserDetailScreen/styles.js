import { StyleSheet } from 'react-native';

import colors from 'utils/colors';

export const styles = StyleSheet.create({
  linkText: {
    color: colors.primary,
  },
  company: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: 24,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  infoText: (hasLink) => ({
    color: hasLink ? colors.primary : colors.textSecondary,
    marginVertical: 2,
    marginLeft: 8,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  phoneLink: {
    color: colors.primary,
  },
  section: {
    marginTop: 12,
    marginBottom: 32,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.textPrimary,
  },
  separator: {
    marginVertical: 12,
    height: 1,
    width: '100%',
    backgroundColor: '#eeeeee',
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  userName: {
    marginBottom: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  webViewHeader: {
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    marginTop: 18,
  },
  closeIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },

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
