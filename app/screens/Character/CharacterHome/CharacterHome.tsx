import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@components/Text/ThemedText'
import Button from '@components/Button/Button'
import { useCustomTheme } from 'contexts/ThemeContext'
import Box from '@components/Box/Box'
import PageContainer from '@components/Containers/PageContainer/PageContainer'
import ButtonWrapper from '@components/Button/ButtonWrapper'
import { FlatList } from 'react-native-gesture-handler'
import { useGetTeamList } from '@hooks/useGetTeamList'
import { padding } from 'constants/padding'
import { BorderRadius } from 'constants/BorderRadius'
import Card from '@components/Card/Card'
import TeamList from '../Components/TeamList/TeamList'

const CharacterHome = () => {
	const { handleSetTheme } = useCustomTheme();
	// get data from api
	const { getTeamList } = useGetTeamList();

	const { currentTheme: { colors } } = useCustomTheme();

	return (
		<PageContainer style={{ height: '100%' }}>
			<View style={{ paddingBottom: padding.lg }}>
				<ThemedText type="subtitle">Here are your posses ready for action</ThemedText>
			</View>
			{/* Pull into seperate FlatList component */}
			<TeamList data={getTeamList()} />
			<View style={{ paddingTop: padding.lg, flexDirection: "row" }}>
				< ButtonWrapper fullWidth={false} centered>
					<Card style={{ backgroundColor: colors.cardLight }} onPress={() => handleSetTheme()}>
						<ThemedText>Create Team</ThemedText>
					</Card>
				</ButtonWrapper >
				<View style={{ width: padding.lg * 1.5 }}></View>
				< ButtonWrapper fullWidth={false} centered >
					<Card style={{ backgroundColor: colors.cardLight }} onPress={() => handleSetTheme()}>
						<ThemedText>Create New Character</ThemedText>
					</Card>
				</ButtonWrapper >
			</View>
		</PageContainer >
	)
}

export default CharacterHome