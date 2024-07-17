import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ style.container }>
      {/* <Text style={ style.title }>BoxObjectModel</Text> */}
      <View style={ style.purpleBox }>
        <Text style={{ color: 'white' }}>Hola mundo</Text>
      </View>
      {/* <View style={ style.purpleBox }></View> */}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  title: {
    fontSize: 30,
    // padding: 5, // borde para todos
    paddingHorizontal: 30, // borde para izquierda y derecha
    paddingVertical: 10, // borde para arriba y abajo
    borderWidth: 10, // border del contenedor
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    // margin: 20, // borde para todos de manera externa
    marginHorizontal: 20, // borde para izquierda y derecha
    marginVertical: 60, // borde para arriba y abajo
    padding: 5, // borde para todos de manera interna
  }
})