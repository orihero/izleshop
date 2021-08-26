/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text as RnText,
	useColorScheme,
	View,
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import {
	CartIcon,
	CategoriesIcon,
	HeartIcon,
	HomeIcon,
	ProfileIcon,
} from "./src/assets/icons/icons";
import Text from "./src/components/general/Text";
import { colors } from "./src/constants/colors";
import AppRouter from "./src/routes/AppRouter";

const App = () => {
	const isDarkMode = useColorScheme() === "dark";

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
			<AppRouter />
		</SafeAreaView>
	);
};

export default App;
