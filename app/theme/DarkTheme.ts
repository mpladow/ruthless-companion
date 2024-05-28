import { DefaultTheme, Theme } from '@react-navigation/native';
import { colors } from './colors';
import { CustomTheme } from 'contexts/ThemeContext';

export const DarkTheme: CustomTheme = {
	dark: true,
	colors: {
		primary: colors.rust.DEFAULT,
		background: colors.black.DEFAULT,
		card: colors.black[700],
		text: colors.ivory.DEFAULT,
		border: colors.rust[700],
		notification: colors.tea_green.DEFAULT,
		danger: colors.rust[400],
		icon: colors.rust.DEFAULT,
		disabled: colors.ivory[400],
		tabIconDefault: colors.rust.DEFAULT,
		tabIconSelected: colors.cambridge_blue.DEFAULT,
	}
}
