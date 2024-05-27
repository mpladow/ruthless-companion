import { Pressable, PressableProps, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import { ThemedText } from '@components/Text/ThemedText';
import styled from 'styled-components/native';

export type VariantType = "primary" | "secondary" | "success" | "danger" | "warning" | "info"

export type ButtonType = PressableProps & {
	variant: VariantType;
	children: ReactNode | string;
}

const StyledButton = styled.Pressable`
border-radius: 3px;
border: 2px solid #BF4F74;
`

const Button = ({ variant, children, onPress }: ButtonType) => {
	const renderChild = () => {
		return typeof children == 'string' ? <ThemedText lightColor='black'>{children}</ThemedText> : children

	}
	return (
		<Pressable onPress={onPress}>
			{renderChild()}
		</Pressable>
	)
}

export default Button





