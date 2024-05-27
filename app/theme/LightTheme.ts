import { DefaultTheme } from '@react-navigation/native';
import { colors } from './colors';

export const DarkTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: colors.rust,
		background: colors.ivory.DEFAULT,
		card: colors.ivory[700],
		text: colors.black.DEFAULT,
		border: colors.rust[700],
		notification: colors.tea_green.DEFAULT
	}
}