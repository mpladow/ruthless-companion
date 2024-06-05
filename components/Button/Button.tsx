import { Pressable, PressableProps, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import { ThemedText } from '../Text/ThemedText';
import styled, { ThemeProvider, css } from 'styled-components/native';
import { useCustomTheme } from '../../contexts/ThemeContext';
import { BorderRadius } from '../../constants/BorderRadius';

export type VariantType = "primary" | "secondary" | "success" | "danger" | "warning" | "info"

export type ButtonType = PressableProps & {
	variant: VariantType;
	children: ReactNode | string;
}

const StyledButton = styled.Pressable<{ variant: VariantType }>`
border-radius: 3px;
border: 2px solid #BF4F74;
padding: 4px;
border-radius: ${BorderRadius.lg}px
${(props) => props.variant == "primary" &&
		css`
		background-color: ${props.theme.colors.primary};
` } ;
${(props) => props.variant == "secondary" &&
		css`
		background-color: ${props.theme.colors.secondary};
` } ;
${(props) => props.variant == "danger" &&
		css`
		background-color:  ${props.theme.colors?.danger};
`
	};
`

const Button = ({ variant, children, onPress }: ButtonType) => {
	// const theme = useTheme();
	const { currentTheme } = useCustomTheme()

	const renderChild = () => {
		return typeof children == 'string' ? <ThemedText style={{ textAlign: 'center' }}>{children}</ThemedText> : children
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





