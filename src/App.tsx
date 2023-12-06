import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Suspense, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';

export default function App() {
  const [loadedFonts] = useFonts({
    'briFontRegular': require('./assets/fonts/BRIDigitalText-Regular.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (loadedFonts) {
      await SplashScreen.hideAsync()
    }
  }, [loadedFonts]);

  if (!loadedFonts) {
    return null;
  }
  return (
    <RecoilRoot>
      <Suspense
        fallback={
          <View>
            <Text>Loading...</Text>
          </View>
        }>
      </Suspense>
    </RecoilRoot>
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
