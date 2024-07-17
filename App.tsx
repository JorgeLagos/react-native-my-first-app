import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons'

import { 
  // BoxObjectModelScreen,
  // CounterM3Screen,
  // CounterScreen,
  // DimensionScreen,
  // FlexDirectionScreen,
  // FlexScreen,
  // HelloWorldScreen,
  HomeworkScreen,
  // PositionScreen,
} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider settings={{ icon: (props) => <IonIcon { ...props }></IonIcon> }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Jorge Lagos Alvarez"></HelloWorldScreen> */}
        {/* <CounterScreen></CounterScreen> */}
        {/* <CounterM3Screen></CounterM3Screen> */}
        {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
        {/* <DimensionScreen></DimensionScreen> */}
        {/* <PositionScreen></PositionScreen> */}
        {/* <FlexScreen></FlexScreen> */}
        {/* <FlexDirectionScreen></FlexDirectionScreen> */}
        <HomeworkScreen></HomeworkScreen>
      </SafeAreaView>
    </PaperProvider>
  )
}