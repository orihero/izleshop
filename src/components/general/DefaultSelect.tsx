import React, { useState } from 'react';

import { View, Text, Modal, ScrollView, StyleSheet } from 'react-native';
import Pressable from './Pressable';

import { colors } from 'constants/colors';
import { ChevronRightIcon, CloseIcon } from 'assets/icons/icons';

interface IDefaultSelectProps {
	value: string;
	setValue: (e: string) => void;
	placeholder: string;
	values: string[];
}

const DefaultSelect = ({
	value,
	setValue,
	placeholder,
	values,
}: IDefaultSelectProps) => {
	const [modalShow, setModalShow] = useState(false);

	const onSelect = (e: string) => {
		setValue(e);
		setModalShow(false);
	};

	return (
		<View style={styles.container}>
			<Pressable onPress={() => setModalShow(!modalShow)}>
				<View style={styles.box}>
					<Text style={value ? styles.text1 : styles.text2}>
						{value || placeholder}
					</Text>
					{value ? (
						<Pressable onPress={() => setValue('')}>
							<View>
								<CloseIcon size={16} color={colors.black} />
							</View>
						</Pressable>
					) : (
						<View style={styles.closed}>
							<ChevronRightIcon size={20} color={colors.black} />
						</View>
					)}
				</View>
			</Pressable>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalShow}
				onRequestClose={() => setModalShow(false)}
			>
				<Pressable onPress={() => setModalShow(false)}>
					<View style={styles.modalContainer}>
						<View style={styles.modalBox}>
							<ScrollView showsVerticalScrollIndicator={false}>
								{values.map((e, i) => (
									<Pressable
										to
										key={i}
										onPress={() => onSelect(e)}
									>
										<View style={styles.item}>
											<Text>{e}</Text>
										</View>
									</Pressable>
								))}
							</ScrollView>
						</View>
					</View>
				</Pressable>
			</Modal>
		</View>
	);
};

export default DefaultSelect;

const styles = StyleSheet.create({
	container: {},
	box: {
		padding: 14,
		marginTop: 12,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		justifyContent: 'space-between',
		height: 55,
	},
	modalContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	modalBox: {
		flex: 0.65,
		width: '90%',
		paddingTop: 10,
		paddingBottom: 20,
		backgroundColor: colors.white,
	},
	item: {
		padding: 12,
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
	},
	closed: {
		transform: [{ rotate: '90deg' }],
	},
	text1: {
		fontSize: 14,
		lineHeight: 18,
		fontWeight: '600',
	},
	text2: {
		fontSize: 14,
		lineHeight: 18,
		fontWeight: '400',
		color: colors.gray2,
	},
});
