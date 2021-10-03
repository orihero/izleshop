import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Pressable from '../general/Pressable';

import { colors } from 'constants/colors';
import { paddingVertical } from 'constants/sizes';

interface ICustomViewProps {
	items: {
		title: string;
		component: () => {};
	}[];
}

const CustomTabView = ({ items }: ICustomViewProps) => {
	const [activeContent, setActiveContent] = useState(0);

	return (
		<View style={styles.container}>
			<View style={styles.titleRow}>
				{items.map((e, i) => (
					<Pressable key={i} onPress={() => setActiveContent(i)}>
						<View>
							<Text
								style={
									activeContent === i
										? styles.text1
										: styles.text2
								}
							>
								{e.title}
							</Text>
							<View
								style={
									activeContent === i
										? styles.activeBorder
										: styles.inActiveBorder
								}
							/>
						</View>
					</Pressable>
				))}
			</View>
			<View style={styles.main}>{items[activeContent].component()}</View>
		</View>
	);
};

export default CustomTabView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleRow: {
		marginTop: paddingVertical,
		marginHorizontal: paddingVertical,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	text1: {
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '600',
		color: colors.black,
	},
	text2: {
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '600',
		color: colors.lightBrown,
	},
	main: {
		flex: 1,
		paddingHorizontal: paddingVertical,
	},
	activeBorder: {
		borderBottomWidth: 1,
		borderColor: colors.black,
	},
	inActiveBorder: {
		borderBottomWidth: 1,
		borderColor: colors.lightBrown,
	},
});
