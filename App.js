import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet</Text>
      </View>
    </View>
  );
}

// this emulates the idea of CSS
// instead of using hyphens, we do camelCase
// keep in mind that styles are not necessarily inherited as we need to add the
//  style directly, nearly as inline style
// unless it is a text widget, thus text components can inherite text component styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20, // this is in pixels
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }

});
