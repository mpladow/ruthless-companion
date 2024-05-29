import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useCustomTheme } from 'contexts/ThemeContext';
import MainTabNavigator from 'navigation/TabNavigation/MainTabNavigator';

const Navigator = () => {
	const { theme, currentTheme } = useCustomTheme();

	// add conditional navigators into here
	return (
		<NavigationContainer theme={currentTheme}>
			<MainTabNavigator />
		</NavigationContainer>

	)
}

export default Navigator

const styles = StyleSheet.create({})