import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetTeamList } from '@hooks/useGetTeamList'
import { FlatList } from 'react-native-gesture-handler';

const TeamList = () => {
	const x = useGetTeamList();

	return (
		<View>
			<FlatList data={x.getTeamById()} renderItem={undefined} />
			<Text>TeamList</Text>
		</View>
	)
}

export default TeamList

const styles = StyleSheet.create({})