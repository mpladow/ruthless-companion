
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterStack from 'navigation/Stacks/CharacterStack/CharacterStack';

const HomeTab = createBottomTabNavigator();

const MainTabNavigator = () => {
	return (
		<HomeTab.Navigator screenOptions={{ headerShown: false }}>
			<HomeTab.Screen name="CharacterStack" component={CharacterStack} />
			<HomeTab.Screen name="CharacterStack2" component={CharacterStack} />
		</HomeTab.Navigator>
	)
}

export default MainTabNavigator

const styles = StyleSheet.create({})