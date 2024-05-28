import { StyleSheet, Text, View } from "react-native";
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider, useCustomTheme } from 'contexts/ThemeContext';
import { useCallback, useEffect, useMemo } from 'react';
import { DarkTheme } from 'theme/DarkTheme';
import { LightTheme } from 'theme/LightTheme';

export default function Main() {

	return (
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",

	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
