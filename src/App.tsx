import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'
function App(){
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Welcome to the React Native App</Text>
      <Text style={styles.text}>Hello World to the React Native App</Text>
      <Text style={styles.text}>Hello World to the React Native App</Text>
      <Text style={styles.text}>Hello World to the React Native App</Text>
      <Text style={styles.text}>Hello World to the React Native App</Text>
      <Text style={styles.text}>Hello World to the React Native App</Text>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,           
  }
})

export default App;