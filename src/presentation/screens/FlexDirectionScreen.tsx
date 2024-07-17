import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const FlexDirectionScreen = () => {
  return (
    <View style={ style.container }>
      <View style={[ style.box, style.box1 ]}></View>
      <View style={[ style.box, style.box2 ]}></View>
      <View style={[ style.box, style.box3 ]}></View>
      <View style={[ style.box, style.box4 ]}></View>

      <View style={[ style.box, style.box1 ]}></View>
      <View style={[ style.box, style.box2 ]}></View>
      <View style={[ style.box, style.box3 ]}></View>
      <View style={[ style.box, style.box4 ]}></View>

      <View style={[ style.box, style.box1 ]}></View>
      <View style={[ style.box, style.box2 ]}></View>
      <View style={[ style.box, style.box3 ]}></View>
      <View style={[ style.box, style.box4 ]}></View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFE1E0',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
    // top: -100,
  },
  box2: {
    backgroundColor: '#4240A2',
    // alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#2E2D71',
    // top: 100,
    // alignSelf: 'center',
  },
  box4: {
    backgroundColor: '#222155',
    // top: 100,
    // alignSelf: 'center',
  },
})