import { type ViewProps } from 'react-native';

import styled from 'styled-components/native';
import { padding } from '../../constants/padding';
import { BorderRadius } from '../../constants/BorderRadius';


export type ThemedViewProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
};


export interface BoxProps extends ViewProps { }

const StyledView = styled.View<BoxProps>`
	padding-left: ${padding.lg}px;
	padding-right: ${padding.lg}px;
	padding-top: ${padding.lg}px;
	padding-bottom: ${padding.lg}px;
	border-radius: ${BorderRadius.lg}px;
`

export default Box;
export function Box({ style, ...otherProps }: ThemedViewProps) {
	return <StyledView style={[style]} {...otherProps} />;
}
