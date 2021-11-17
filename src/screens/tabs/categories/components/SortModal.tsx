import React from 'react';
import {
	View,
	Text,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Pressable from 'components/general/Pressable';
import { colors } from 'constants/colors';
import { strings } from 'locales/locales';

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
			animationType="fade"
			transparent={true}
			visible={sortOpen}
			onRequestClose={closeModal}
		>
			<View style={{ ...styles.container, paddingTop: insets.top }}>
				<Pressable onPress={closeModal}>
					<View style={styles.childContainer}>
						<View style={styles.content}>
							<Text style={styles.title}>{strings.sort}</Text>
							<Pressable onPress={() => onPress(0)}>
								<View
									style={[
										styles.row,
										activeIndex === 0
											? styles.bgBlue
											: styles.bgWhite,
									]}
								>
									<Text
										style={[
											styles.text,
											activeIndex === 0
												? styles.cwhite
												: styles.cblack,
										]}
									>
										{strings.default}
									</Text>
								</View>
							</Pressable>
							<Pressable onPress={() => onPress(3)}>
								<View
									style={[
										styles.row,
										activeIndex === 3
											? styles.bgBlue
											: styles.bgWhite,
									]}
								>
									<Text
										style={[
											styles.text,
											activeIndex === 3
												? styles.cwhite
												: styles.cblack,
										]}
									>
										{strings.ascendingPrice}
									</Text>
								</View>
							</Pressable>
							<Pressable onPress={() => onPress(4)}>
								<View
									style={[
										styles.row,
										activeIndex === 4
											? styles.bgBlue
											: styles.bgWhite,
									]}
								>
									<Text
										style={[
											styles.text,
											activeIndex === 4
												? styles.cwhite
												: styles.cblack,
										]}
									>
										{strings.descendingPrice}
									</Text>
								</View>
							</Pressable>
							<Pressable onPress={() => onPress(5)}>
								<View
									style={[
										styles.row,
										activeIndex === 5
											? styles.bgBlue
											: styles.bgWhite,
									]}
								>
									<Text
										style={[
											styles.text,
											activeIndex === 5
												? styles.cwhite
												: styles.cblack,
										]}
									>
										{`${strings.byRating} ${strings.startingFromTop}`}
									</Text>
								</View>
							</Pressable>
							<Pressable onPress={() => onPress(6)}>
								<View
									style={[
										styles.row,
										activeIndex === 6
											? styles.bgBlue
											: styles.bgWhite,
									]}
								>
									<Text
										style={[
											styles.text,
											activeIndex === 6
												? styles.cwhite
												: styles.cblack,
										]}
									>
										{`${strings.byRating} ${strings.startingFromLow}`}
									</Text>
								</View>
							</Pressable>
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
