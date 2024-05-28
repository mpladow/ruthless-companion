import { DefaultTheme, Theme } from '@react-navigation/native';
import { colors } from './colors';
import { CustomTheme } from 'contexts/ThemeContext';

export const LightTheme: CustomTheme = {
	dark: false,
	colors: {
		primary: colors.rust.DEFAULT,
		background: colors.ivory.DEFAULT,
		card: colors.ivory[700],
		text: colors.black.DEFAULT,
		border: colors.rust[700],
		notification: colors.tea_green.DEFAULT,
		danger: colors.rust[800],
		icon: colors.rust.DEFAULT,
		disabled: colors.ivory[400],
		tabIconDefault: colors.rust.DEFAULT,
		tabIconSelected: colors.cambridge_blue.DEFAULT,
	}
}