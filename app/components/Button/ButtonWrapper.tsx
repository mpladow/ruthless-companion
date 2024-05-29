import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BoxProps } from '@components/Box/Box'
import { padding } from 'constants/padding'

const ButtonWrapper = ({ fullWidth, centered, style, children }: { fullWidth: boolean, centered: boolean } & React.PropsWithChildren & BoxProps) => {
	return (
		<View style={[style, { paddingTop: padding.sm, paddingBottom: padding.sm, alignSelf: "center" }, fullWidth ? { width: '100%' } : { width: '50%', justifyContent: "center", flex: 1 }]}>
			{children}
		</View>
	)
}

export default ButtonWrapper

const styles = StyleSheet.create({})