import { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../theme/global.style';
import { FAB } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons'

export const CounterM3Screen = () => {
  const [count, setCount] = useState(5)

  return (
    <View style={ globalStyle.container }>
      <Text style={ globalStyle.title }>{ count }</Text>

      <FAB icon="add-outline"
        style={ globalStyle.fab }
        onPress={ () => setCount(count + 1) }
        onLongPress={ () => setCount(0) }></FAB>
    </View>
  )
}