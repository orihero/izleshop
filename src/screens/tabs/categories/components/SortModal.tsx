import Pressable from 'components/general/Pressable';
import { colors } from 'constants/colors';
import { strings } from 'locales/locales';
import React from 'react';
import {
	Modal,
	StyleSheet, Text, View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export let sorts = [
	{ name: strings.default, },
	{ name: strings.ascendingPrice, tag: 'priceSort', value: 'asc' },
	{ name: strings.descendingPrice, tag: 'priceSort', value: "desc" },
	{ name: strings.byRating + strings.startingFromTop, tag: 'rating', value: "asc" },
	{ name: strings.byRating + strings.startingFromLow, tag: 'rating', value: "desc" },

]

interface ISortModal {
	sortOpen: boolean;
	setSortOpen: (e: boolean) => void;
	activeIndex: number;
	setActiveIndex: (n: number) => void;
}

const SortModal = ({
	sortOpen,
	setSortOpen,
	activeIndex,
	setActiveIndex,
}: ISortModal) => {
	const insets = useSafeAreaInsets();

	const closeModal = () => {
		setSortOpen(false);
	};

	const onPress = (index: number) => {
		setActiveIndex(index);
		closeModal();
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={sortOpen}
			onRequestClose={closeModal}
		>
			<View style={{ ...styles.container, paddingTop: insets.top }}>
				<Pressable onPress={closeModal}>
					<View style={styles.childContainer}>
						<View style={styles.content}>
							<Text style={styles.title}>{strings.sort}</Text>
							{sorts.map((e, i) => {
								return <Pressable key={i} onPress={() => onPress(i)}>
									<View
										style={[
											styles.row,
											activeIndex === i
												? styles.bgBlue
												: styles.bgWhite,
										]}
									>
										<Text
											style={[
												styles.text,
												activeIndex === i
													? styles.cwhite
													: styles.cblack,
											]}
										>
											{e.name}
										</Text>
									</View>
								</Pressable>
							})}
						</View>
					</View>
				</Pressable>
			</View>
		</Modal>
	);
};

export default SortModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	childContainer: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0,.3)',
	},
	content: {
		// flex: 1,
		paddingBottom: 30,
		paddingHorizontal: 20,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: colors.white,
	},
	title: {
		fontSize: 18,
		lineHeight: 18,
		fontWeight: '400',
		textAlign: 'center',
		paddingVertical: 20,
	},
	row: {
		paddingHorizontal: 16,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
	},
	text: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '500',
	},
	bgWhite: {
		backgroundColor: colors.white,
	},
	bgBlue: {
		backgroundColor: colors.darkBlue,
	},
	cblack: {
		color: colors.black,
	},
	cwhite: {
		color: colors.white,
	},
});
