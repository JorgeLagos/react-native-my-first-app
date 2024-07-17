import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PositionScreen = () => {
  return (
    <View style={ style.container }>
      <View style={ style.greenBox }></View>
      <View style={ style.purpleBox }></View>
      <View style={ style.orangeBox }></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    right: 0
  },
  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: '#228A29',
    borderWidth: 10,
    borderColor: '#FFFFFF',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject
  },
})