import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetTeamList } from '@hooks/useGetTeamList'
import { FlatList } from 'react-native-gesture-handler';
import Box from '@components/Box/Box';
import { ThemedText } from '@components/Text/ThemedText';

const TeamList = () => {
	const x = useGetTeamList();

	return (
		<View>
			<FlatList data={x.getTeamList()} renderItem={undefined} ListEmptyComponent={() => <Box><ThemedText>Time to create your posse!</ThemedText></Box>} />
			<Text>TeamList</Text>
		</View>
	)
}

export default TeamList

const styles = StyleSheet.create({})