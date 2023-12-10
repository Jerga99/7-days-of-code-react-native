



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ActivityHomeScreen } from './src/screens/Home';
import { COLORS } from './src/variables/styles';
import { useEffect, useState } from 'react';
import { isAsyncStorageEnabled } from './src/storage';


export default function App() {
  const [isStorageEnabled, setIsStorageEnabled] = useState(null);

  useEffect(() => {
    const checkStorage = async () => {
      const isEnabled = await isAsyncStorageEnabled();
      setIsStorageEnabled(isEnabled);
    }

    checkStorage();
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {isStorageEnabled == null ?
          <></> :
          <ActivityHomeScreen isStorageEnabled={isStorageEnabled} />
        }
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
