import { StyleSheet, View } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={ style.container }>
      <View style={[style.box, style.purpleBox]}></View>
      <View style={[style.box, style.orangeBox]}></View>
      <View style={[style.box, style.cianBox]}></View>
    </View>
  )
}

/* Tarea inicial */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', },
//   orangeBox: { backgroundColor: '#F0A23B', },
//   cianBox: { backgroundColor: '#00FFFF', },
// })

/* Desarrollo: Tarea 1 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', },
//   orangeBox: { backgroundColor: '#F0A23B', flex: 1, },
//   cianBox: { backgroundColor: '#00FFFF', },
// })

/* Desarrollo: Tarea 2 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'center', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', },
//   orangeBox: { backgroundColor: '#F0A23B', },
//   cianBox: { backgroundColor: '#00FFFF', width: '100%', },
// })

/* Desarrollo: Tarea 3 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'center', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', alignSelf: 'flex-end', },
//   orangeBox: { backgroundColor: '#F0A23B', },
//   cianBox: { backgroundColor: '#00FFFF', alignSelf: 'center', },
// })

/* Desarrollo: Tarea 4 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'space-between', alignItems: 'center', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', alignSelf: 'flex-end', },
//   orangeBox: { backgroundColor: '#F0A23B', },
//   cianBox: { backgroundColor: '#00FFFF', alignSelf: 'flex-start', },
// })

/* Desarrollo: Tarea 5 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'space-between', flexDirection: 'row', },
//   box: { width: 100, height: '100%', borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', },
//   orangeBox: { backgroundColor: '#F0A23B', },
//   cianBox: { backgroundColor: '#00FFFF', },
// })

/* Desarrollo: Tarea 6 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'space-between', },
//   box: { width: '100%', height: '100%', borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', flex: 2, },
//   orangeBox: { backgroundColor: '#F0A23B', flex: 2, },
//   cianBox: { backgroundColor: '#00FFFF', flex: 4, },
// })

/* Desarrollo: Tarea 7 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'center', alignItems: 'center', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', },
//   orangeBox: { backgroundColor: '#F0A23B', },
//   cianBox: { backgroundColor: '#00FFFF', },
// })

/* Desarrollo: Tarea 8 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'center', alignItems: 'center', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', },
//   orangeBox: { backgroundColor: '#F0A23B', right: -100 },
//   cianBox: { backgroundColor: '#00FFFF', },
// })

/* Desarrollo: Tarea 9 */
// const style = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'center', alignItems: 'center', },
//   box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
//   purpleBox: { backgroundColor: '#5856D6', top: 100 },
//   orangeBox: { backgroundColor: '#F0A23B', right: -100 },
//   cianBox: { backgroundColor: '#00FFFF', },
// })

/* Desarrollo: Tarea 10 */
const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#28425B', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
  box: { width: 100, height: 100, borderWidth: 10, borderColor: '#FFFFFF', },
  purpleBox: { backgroundColor: '#5856D6', },
  orangeBox: { backgroundColor: '#F0A23B', top: 50  },
  cianBox: { backgroundColor: '#00FFFF', },
})