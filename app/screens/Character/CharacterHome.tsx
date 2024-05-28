import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@components/Text/ThemedText'
import Button from '@components/Button/Button'
import { useCustomTheme } from 'contexts/ThemeContext'
import Box from '@components/Box/Box'
import PageContainer from '@components/Containers/PageContainer/PageContainer'
import ButtonWrapper from '@components/Button/ButtonWrapper'
import { FlatList } from 'react-native-gesture-handler'

const CharacterHome = () => {
	const { handleSetTheme } = useCustomTheme();
	// get data from api
	
	return (
		<PageContainer>
			<ThemedText type="subtitle">Home</ThemedText>
			<ThemedText>Test Screen for buttons and componets</ThemedText>
			<FlatList data={undefined} renderItem={undefined} />
			<ButtonWrapper fullWidth={false} centered>
				<Button onPress={() => handleSetTheme()} variant={'danger'}>Hello</Button>
			</ButtonWrapper>
		</PageContainer>
	)
}

export default CharacterHome

const styles = StyleSheet.create({})