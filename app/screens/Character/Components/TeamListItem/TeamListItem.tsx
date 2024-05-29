import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@components/Box/Box'
import Card from '@components/Card/Card'
import { ThemedText } from '@components/Text/ThemedText'
import { BorderRadius } from 'constants/BorderRadius'
import { padding } from 'constants/padding'
import { useCustomTheme } from 'contexts/ThemeContext'
import { TeamListItemType } from 'screens/Character/types/TeamListItem'

const TeamListItem = ({ item }: { item: TeamListItemType }) => {
	const { currentTheme: { colors } } = useCustomTheme();

	return (
		<Card onPress={() => console.log("TODO: Navigate to darteam page")} style={{
			borderRadius: BorderRadius.md,
			paddingTop: padding.lg,
			paddingBottom: padding.lg, backgroundColor: colors.card
		}}>
			<Box style={{ flex: 1, flexDirection: "row" }}>
				<Box style={{ flex: 1, flexDirection: 'column' }}>
					<ThemedText type='defaultSemiBold'>{item.name}</ThemedText>
					<ThemedText type='default'>{item.numberOfCharacters}</ThemedText>
				</Box>
				<Box style={{ flex: 1, flexDirection: 'column' }}>
				</Box>
			</Box>
		</Card>
	)
}

export default TeamListItem