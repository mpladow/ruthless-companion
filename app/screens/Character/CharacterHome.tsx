import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@components/Text/ThemedText'
import Button from '@components/Button/Button'
import { useCustomTheme } from 'contexts/ThemeContext'
import Box from '@components/Box/Box'
import PageContainer from '@components/Containers/PageContainer/PageContainer'

const CharacterHome = () => {
	const { handleSetTheme } = useCustomTheme();
	return (
		<PageContainer>
			<ThemedText type="title">Home</ThemedText>
			<ThemedText>Test Screen for buttons and componets</ThemedText>
			<Button onPress={() => handleSetTheme()} variant={'danger'}>Hello</Button>
		</PageContainer>
	)
}

export default CharacterHome

const styles = StyleSheet.create({})