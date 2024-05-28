import { useWindowDimensions } from 'react-native'

export enum ScreenSize {
	SmallMobile = 320,
	LargeMobile = 480,
	Tablet = 768,
	Desktop = 1024
}
export const useMediaQuery = () => {

	const { width } = useWindowDimensions();

	const isMobile = width <= ScreenSize.LargeMobile;
	const isTablet = width >= ScreenSize.LargeMobile && width <= ScreenSize.Tablet;
	const isDesktop = width > ScreenSize.Tablet;


	// used to set different styles depending on what screen width is returned
	const mediaQuery = ({ phoneValue, tabletValue, desktopValue }: { phoneValue?: number, tabletValue?: number, desktopValue?: number }) => {
		switch (true) {
			case isMobile:
				return phoneValue;
			case isTablet:
				return tabletValue;
			case isDesktop:
				return desktopValue;
		}
	}

	return { isMobile, isDesktop, isTablet, mediaQuery }
}