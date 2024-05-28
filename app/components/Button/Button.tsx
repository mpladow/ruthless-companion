import { Pressable, PressableProps, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import { ThemedText } from '@components/Text/ThemedText';
import styled, { ThemeProvider, css } from 'styled-components/native';
import { useCustomTheme } from 'contexts/ThemeContext';

export type VariantType = "primary" | "secondary" | "success" | "danger" | "warning" | "info"

export type ButtonType = PressableProps & {
	variant: VariantType;
	children: ReactNode | string;
}

const StyledButton = styled.Pressable<{ variant: VariantType }>`
border-radius: 3px;
border: 2px solid #BF4F74;
padding: 4px;
${(props) => props.variant == "primary" &&
		css`
		background-color: ${props.theme.colors.notification};
` } ;

${(props) => props.variant == "danger" &&
		props.theme.dark ? css`
		background-color:  ${props.theme.colors?.danger};
` :
		css`
		background-color: ${props.theme.colors?.danger};
`
	};
`

const Button = ({ variant, children, onPress }: ButtonType) => {
	// const theme = useTheme();
	const { currentTheme } = useCustomTheme()

	const renderChild = () => {
		return typeof children == 'string' ? <ThemedText>{children}</ThemedText> : children
	}
	return (
		<ThemeProvider theme={currentTheme}>
			<StyledButton variant={variant} onPress={onPress}>
				{renderChild()}
			</StyledButton>
		</ThemeProvider>
	)
}

export default Button





