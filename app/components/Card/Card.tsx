import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box, { BoxProps } from '@components/Box/Box'
import { useCustomTheme } from 'contexts/ThemeContext';

type CardProps = {
	onPress?: () => void;
} & BoxProps

const Card = ({ onPress, style, children }: CardProps) => {
	const { currentTheme } = useCustomTheme();
	const boxShadow = {
		shadowColor: currentTheme.colors.text,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
	}
	return (
		<Pressable disabled={onPress === undefined} onPress={onPress}>
			<Box style={[{ backgroundColor: currentTheme.colors.card }, style]}>
				{children}
			</Box>
		</Pressable>
	)
}

export default Card

const styles = StyleSheet.create({})