import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@components/Box/Box'
import { padding } from 'constants/padding'

const ButtonWrapper = ({ fullWidth, centered, children }: { fullWidth: boolean, centered: boolean } & React.PropsWithChildren) => {
	return (
		<View style={[{ paddingTop: padding.sm, paddingBottom: padding.sm, alignSelf: "center" }, fullWidth ? { width: '100%' } : { width: '50%', justifyContent: "center", flex: 1 }]}>
			{children}
		</View>
	)
}

export default ButtonWrapper

const styles = StyleSheet.create({})