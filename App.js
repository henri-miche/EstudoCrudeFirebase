import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Show from './src/Show';

const App = () => {
  return (
    <View style={styles.container}>
      <Show/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
  },
});
export default App;
