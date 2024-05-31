import { DefaultTheme, Theme } from '@react-navigation/native';
import { colors } from './colors';
import { CustomTheme } from '../contexts/ThemeContext';

export const LightTheme: CustomTheme = {
	dark: false,
	colors: {
		primary: colors.primary[100],
		secondary: colors.secondary[40],
		tertiary: colors.tertiary[40],
		background: colors.neutral[100],
		card: colors.neutral[95],
		cardLight: colors.tertiary[90],
		text: colors.black.DEFAULT,
		textLight: colors.tertiary[90],
		border: colors.rust[700],
		notification: colors.tea_green.DEFAULT,
		danger: colors.rust[800],
		icon: colors.rust.DEFAULT,
		disabled: colors.ivory[400],
		tabIconDefault: colors.black.DEFAULT,
		tabIconSelected: colors.primary[50],
		buttonPrimary: colors.rust[200],
	}
}