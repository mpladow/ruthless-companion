import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@components/Text/ThemedText'
import Button from '@components/Button/Button'
import { useCustomTheme } from 'contexts/ThemeContext'
import Box from '@components/Box/Box'

const CharacterHome = () => {
	const { handleSetTheme } = useCustomTheme();
	return (
		<Box>
			<ThemedText>Test Screen for buttons and componets</ThemedText>
			<ThemedText>Hello World</ThemedText>
			<Button onPress={() => handleSetTheme()} variant={'danger'}>Hello</Button>
		</Box>
	)
}

export default CharacterHome

const styles = StyleSheet.create({})