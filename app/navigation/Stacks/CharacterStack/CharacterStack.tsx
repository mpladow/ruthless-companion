import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import CharacterHome from 'screens/Character/CharacterHome';

const Stack = createStackNavigator();
const CharacterStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={CharacterHome} />
		</Stack.Navigator>
	)
}

export default CharacterStack

const styles = StyleSheet.create({})