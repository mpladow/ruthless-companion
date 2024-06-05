import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { store } from '../store/store';
import { Provider } from 'react-redux';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<ThemeContextProvider>
					<Stack>
						<Stack.Screen name="(mainTabs)" 
						options={{ headerShown: false }} 
						/>
						{/* <Stack.Screen name="+not-found" /> */}
					</Stack>
			</ThemeContextProvider>
		</Provider>
	);
}
