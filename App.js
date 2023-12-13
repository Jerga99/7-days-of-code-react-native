



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { ActivityHomeScreen } from './src/screens/Home';
import { COLORS } from './src/variables/styles';
import { useEffect, useState } from 'react';
import { isAsyncStorageEnabled } from './src/storage';
import { TutorialScreen } from './src/screens/Tutorial';


export default function App() {
  const [isStorageEnabled, setIsStorageEnabled] = useState(null);

  useEffect(() => {
    const checkStorage = async () => {
      const isEnabled = await isAsyncStorageEnabled();
      setIsStorageEnabled(isEnabled);
    }

    checkStorage();
  }, []);

  const containerStyle = Platform.OS === "web" ? {
    maxWidth: 500,
    margin: "auto"
  } : {};

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={{...styles.container, ...containerStyle}}>
        {isStorageEnabled == null ?
          <></> :
          <>
            <TutorialScreen visible={true} />
            <ActivityHomeScreen isStorageEnabled={isStorageEnabled} />
          </>
        }
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    width: "100%",
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
