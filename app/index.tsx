import { StyleSheet } from "react-native";
import App from './App';
import { ThemeContextProvider } from 'contexts/ThemeContext';

import { Provider } from 'react-redux';
import { store } from 'store/store';
import { registerRootComponent } from 'expo';


const Main = () => {
	return (
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	);
}

export default registerRootComponent(Main);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",

	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
