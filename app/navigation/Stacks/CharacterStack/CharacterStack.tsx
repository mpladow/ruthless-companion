import { ThemedText } from '@components/Text/ThemedText';
import { createStackNavigator } from '@react-navigation/stack';
import { useCustomTheme } from 'contexts/ThemeContext';

import React from 'react'
import { padding } from 'constants/padding';
import CharacterHome from 'screens/Character/CharacterHome/CharacterHome';

const Stack = createStackNavigator();
const CharacterStack = () => {
	const { currentTheme } = useCustomTheme();
	return (
		<Stack.Navigator screenOptions={{
			headerStyle: { backgroundColor: currentTheme.colors.background, borderBottomColor: "transparent", padding: padding.sm },
			headerTitle: (x) => <ThemedText type="title">{x.children}</ThemedText>
		}}>
			<Stack.Screen name="Home" component={CharacterHome} />
		</Stack.Navigator>
	)
}

export default CharacterStack