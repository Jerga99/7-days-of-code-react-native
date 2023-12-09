



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityTimer } from './src/components/activity/Timer';
import { ActivityItem } from './src/components/activity/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityTimer></ActivityTimer>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
