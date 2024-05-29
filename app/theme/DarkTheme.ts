import { DefaultTheme, Theme } from '@react-navigation/native';
import { colors } from './colors';
import { CustomTheme } from 'contexts/ThemeContext';

export const DarkTheme: CustomTheme = {
	dark: true,
	colors: {
		primary: colors.primary[20],
		secondary: colors.secondary[20],
		tertiary: colors.tertiary[20],
		background: colors.neutral[5],
		card: colors.neutral[25],
		cardLight: colors.tertiary[30],
		text: colors.ivory.DEFAULT,
		textLight: colors['dark-grey'][300],
		border: colors.rust[700],
		notification: colors.tea_green.DEFAULT,
		danger: colors.rust[400],
		icon: colors.rust.DEFAULT,
		disabled: colors.ivory[400],
		tabIconDefault: colors.neutral[100],
		tabIconSelected: colors.primary[60],
		buttonPrimary: colors.rust[200],

	}
}
