import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistenceKeys } from 'constants/Keys/PersistanceKeys';
import { DarkTheme } from 'theme/DarkTheme';
import { LightTheme } from 'theme/LightTheme';


interface CustomColors {
	primary: string;
	secondary: string;
	tertiary: string;
	background: string;
	card: string;
	cardLight: string;
	text: string;
	textLight: string;
	border: string;
	notification: string;
	danger: string;
	icon: string,
	disabled: string;
	tabIconDefault: string,
	tabIconSelected: string,
	buttonPrimary: string
}
export interface CustomTheme {
	dark: boolean;
	colors: CustomColors,
}
interface ThemeContext {
	theme: "light" | "dark";
	currentTheme: CustomTheme;
	handleSetTheme: () => void;
}
export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<"light" | "dark">("dark")
	const [currentTheme, setCurrentTheme] = useState<CustomTheme>(LightTheme)
	const handleSetTheme = () => {
		if (theme == "light") {
			setTheme("dark");
		}
		else {
			setTheme("light")
		}
	}

	useEffect(() => {
		if (theme == "dark") {
			setCurrentTheme(DarkTheme)
		} else {
			setCurrentTheme(LightTheme)
		}
	}, [theme])

	useEffect(() => {
		AsyncStorage.getItem(PersistenceKeys.THEME_KEY).then(res => {
			if (res) {
				const themeParsed = JSON.parse(res);
				setTheme(themeParsed);
			}
		})
	}, [])

	useEffect(() => {
		AsyncStorage.setItem(PersistenceKeys.THEME_KEY, JSON.stringify(theme));
	}, [theme])

	return <ThemeContext.Provider value={{ theme, currentTheme, handleSetTheme }}>{children}</ThemeContext.Provider>
}

export const useCustomTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useCustomTheme must be within ThemeContextProvider")
	}
	return context;
}