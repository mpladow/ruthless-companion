
import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterStack from 'navigation/Stacks/CharacterStack/CharacterStack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useCustomTheme } from 'contexts/ThemeContext';
import { LightTheme } from 'theme/LightTheme';
import { FontAwesome6 } from '@expo/vector-icons';
const HomeTab = createBottomTabNavigator();

const MainTabNavigator = () => {
	const { theme, currentTheme } = useCustomTheme();

	return (
		<NavigationContainer independent={true} theme={currentTheme}>
			<HomeTab.Navigator screenOptions={
				{
					tabBarActiveTintColor: currentTheme.colors.tabIconSelected,
					tabBarInactiveTintColor: currentTheme.colors.tabIconDefault,
					headerShown: false,
					tabBarStyle: { backgroundColor: currentTheme.colors.background, borderTopColor: currentTheme.colors.card },
				}}>
				<HomeTab.Screen name="CharacterStack" component={CharacterStack}
					options={{
						tabBarLabel: "Characters",
						tabBarIcon: ({ focused, color }) => <FontAwesome6 name="people-line" size={24} color={focused ? currentTheme.colors.tabIconSelected : currentTheme.colors.tabIconDefault} />
					}} />
			</HomeTab.Navigator>
		</NavigationContainer >
	)
}

export default MainTabNavigator

const styles = StyleSheet.create({})