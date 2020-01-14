// we import the hooks needed
import React, { useState } from 'react';
// we import the Button component
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Arvin')
  const [person, setPerson] = useState({name: 'Mario', age: 45})

  const clickHandler = () => {
    setName('Ryu')
    setPerson({...person, name: 'Luigi'})
  }

  return (
    <View style={styles.container}> 
    
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      {/* we created a container for the button*/}
      <View style={styles.buttonContainer}>
        {/* keep in mind that buttons are self closing components */}
        <Button title='update state' onPress={clickHandler}/>
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
  buttonContainer: {
    marginTop: 20
  }
});
