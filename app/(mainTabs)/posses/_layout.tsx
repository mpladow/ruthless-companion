import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useCustomTheme } from '../../../contexts/ThemeContext'
import { ThemedText } from '../../../components/Text/ThemedText'

// this is needed to set the back  button on a nested screen!
export const unstable_settings = {
	initialRouteName: 'index',
};
const CharacterStack = () => {
	const { currentTheme } = useCustomTheme();
	return (
		<Stack
			initialRouteName='posses'
			screenOptions={{
				headerStyle: { backgroundColor: currentTheme.colors.background },
				headerTitle: (props) => <ThemedText type="title">{props.children}</ThemedText>
			}}>
			<Stack.Screen name="index" options={{ title: "Posses" }} />
			<Stack.Screen name="[posseId]" />
		</Stack>
	)
}

export default CharacterStack

const styles = StyleSheet.create({})