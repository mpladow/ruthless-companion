import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@components/Text/ThemedText'
import Button from '@components/Button/Button'

const CharacterHome = () => {
	return (
		<View>
			<Text>Test Screen for buttons and componets</Text>
			<ThemedText darkColor=''>Hello World</ThemedText>
			<Button variant={''} onPress={() => alert("HELLO")}>Hello</Button>
		</View>
	)
}

export default CharacterHome

const styles = StyleSheet.create({})