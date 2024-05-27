import { DefaultTheme } from '@react-navigation/native';
import { colors } from './colors';

export const DarkTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: colors.rust,
		background: colors.black.DEFAULT,
		card: colors.black[700],
		text: colors.ivory.DEFAULT,
		border: colors.rust[700],
		notification: colors.tea_green.DEFAULT
	}
}