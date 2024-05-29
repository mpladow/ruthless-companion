import Button from '@components/Button/Button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigator from 'navigation/Navigator/Navigator';
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import { store } from 'store/store';

const App = () => {
	return (
		<Navigator />

	);
}

export default App;

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
