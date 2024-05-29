import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BorderRadius } from 'constants/BorderRadius'
import { colors } from 'theme/colors'
import Card from '@components/Card/Card'
import { padding } from 'constants/padding'
import { ThemedText } from '@components/Text/ThemedText'
import Box from '@components/Box/Box'
import TeamListItem from '../TeamListItem/TeamListItem'
import { TeamListItemType } from 'screens/Character/types/TeamListItem'



type TeamListType = {
	data: TeamListItemType[]
}
const TeamList = ({ data }: TeamListType) => {
	return (
		<FlatList data={data} ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>} renderItem={({ item, index }) =>
			<TeamListItem item={item} />
		}
		/>
	)
}

export default TeamList

const styles = StyleSheet.create({})