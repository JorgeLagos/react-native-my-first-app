import { Dimensions, StyleSheet, useWindowDimensions, View } from 'react-native'
// import { Dimensions } from 'react-native';

import { Text } from 'react-native-paper';

// const { width, height } = Dimensions.get('window')

export const DimensionScreen = () => {
  const { width, height } = useWindowDimensions()

  return (
    <View>
      <View style={ style.container }>
        <View style={{ ...style.purpleBox, width: width * 0.60 }}></View>
      </View>

      <Text style={ style.title }>W { width }, H { height }</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    // width: '100%',
    width: 300,
    height: 300,
    backgroundColor: 'green',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  }
})