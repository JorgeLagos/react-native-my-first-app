import { StyleSheet, Platform } from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'yellow',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: Platform.OS === 'android' ? 10 : 0,
  },
})