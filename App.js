import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <Text>A</Text>
      </View>
      <View style={styles.flexbox}>
        <Text>B</Text>
      </View>
      <View style={styles.flexbox}>
        <Text>C</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  flexbox: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

