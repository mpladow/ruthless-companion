import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    NunitoSans: require("../assets/fonts/NunitoSans-Variable.ttf"),
  });
  SplashScreen.hideAsync();

  useEffect(() => {
    console.log("🚀 ~ RootLayout ~ error:", error);
    console.log("🚀 ~ useEffect ~ loaded:", fontsLoaded);
    let x = 1;
    if (fontsLoaded === false) {
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Stack>
          <Stack.Screen name="(mainTabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
      </ThemeContextProvider>
    </Provider>
  );
}
