import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const FlexScreen = () => {
  return (
    <View style={ style.container }>
      <View style={ style.box1 }></View>
      <View style={ style.box2 }></View>
      <View style={ style.box3 }></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box1: {
    backgroundColor: '#5856D6',
    flex: 1,
  },
  box2: {
    backgroundColor: '#4240A2',
    flex: 2,
  },
  box3: {
    backgroundColor: '#2E2D71',
    flex: 3,
  },
})