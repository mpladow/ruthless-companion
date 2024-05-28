import { type ViewProps } from 'react-native';

import styled from 'styled-components/native';
import { padding } from 'theme/padding';

export type ThemedViewProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
};


export interface BoxProps extends ViewProps { }

const StyledView = styled.View<BoxProps>`
	padding-left: ${padding.lg}px;
	padding-right: ${padding.lg}px;
`

export default Box;
export function Box({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
	return <StyledView style={[style]} {...otherProps} />;
}
