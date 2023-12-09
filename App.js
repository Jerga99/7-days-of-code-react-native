



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ActivityHomeScreen } from './src/screens/Home';
import { COLORS } from './src/variables/styles';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ActivityHomeScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
