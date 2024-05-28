
import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterStack from 'navigation/Stacks/CharacterStack/CharacterStack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useCustomTheme } from 'contexts/ThemeContext';
import { LightTheme } from 'theme/LightTheme';

const HomeTab = createBottomTabNavigator();

const MainTabNavigator = () => {
	const { theme, currentTheme } = useCustomTheme();

	const themeSwitchMemo = useMemo(() => {
		console.log(`them being switched to  ${theme}`);
		return theme == "dark" ? DarkTheme : LightTheme
	}, [theme])

	return (
		<NavigationContainer independent={true} theme={currentTheme}>
			<HomeTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: currentTheme.colors.background, borderTopColor: currentTheme.colors.disabled } }}>
				<HomeTab.Screen name="CharacterStack" component={CharacterStack} />
				<HomeTab.Screen name="CharacterStack2" component={CharacterStack} />
			</HomeTab.Navigator>
		</NavigationContainer>
	)
}

export default MainTabNavigator

const styles = StyleSheet.create({})