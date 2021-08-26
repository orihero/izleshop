import React from "react";
import { StyleSheet, Text as RNText, TextProps } from "react-native";

const Text = ({
	children,
	...rest
}: TextProps & { children: React.ReactNode }) => {
	let { style, ...txtProps } = rest || {};
	style = StyleSheet.compose(style, {
		fontFamily: "Lato",
	});
	return (
		<RNText style={style} {...txtProps}>
			{children}
		</RNText>
	);
};

export default Text;
