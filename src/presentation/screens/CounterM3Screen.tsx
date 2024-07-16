import { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyle } from '../theme/global.style';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(5)

  return (
    <View style={ globalStyle.container }>
      <Text style={ globalStyle.title }>{ count }</Text>

      <FAB label="Incrementar" 
        style={ globalStyle.fab }
        onPress={ () => setCount(count + 1) }
        onLongPress={ () => setCount(0) }></FAB>
    </View>
  )
}