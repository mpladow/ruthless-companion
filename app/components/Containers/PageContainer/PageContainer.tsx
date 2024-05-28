import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@components/Box/Box'


export type PageContainerType = {

} & React.PropsWithChildren
const PageContainer = ({ children }: PageContainerType) => {
	return (
		<Box>
			{children}
		</Box>
	)
}

export default PageContainer

const styles = StyleSheet.create({})