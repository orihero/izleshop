import { useNavigation } from '@react-navigation/core';
import { ChevronRightIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import {
	IAccordion, IAccordionContent, IAccordionItem
} from 'mockup/data';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CommentsScreen as Comments } from 'screens/tabs';
import Pressable from '../general/Pressable';



interface IAccordionProps {
	items: any;
}


const Accordion = ({ items, characteristics: data, information, title }: IAccordionProps) => {
	const [open, setOpen] = useState(0);
	const navigation = useNavigation();

	let renderContent = ({ title, characteristics, content, hasCount, hasInformation, hasRoute }: IAccordion) => {
		if (hasInformation) {
			return <View>
				<Text style={styles.text6}>
					{title}
				</Text>
				<Text style={styles.text7}>
					{information}
				</Text>
			</View>
		}
		if (characteristics) {
			return Object.keys(data || {})?.map((e) => {
				return (
					<View
						style={
							styles.characteristics
						}
					>
						<Text style={styles.text6}>
							{e}
						</Text>
						<Text style={styles.text7}>
							{data[e]}
						</Text>
					</View>
				);
			})
		}
		return <Comments />
	}
	const onChangeContent = (index: number) => {
		if (index === 1) {
			//@ts-ignore
			navigation.navigate(Routes.WITHOUT_TABS, {
				screen: Routes.INSTALLMENT,
			});
		} else if (open === index) {
			setOpen(0);
			return;
		}

		setOpen(index);
	};

	return (
		<View style={styles.container}>
			{items.map(
				(
					e: IAccordion,
					i: number
				) => {
					let {
						title,
						content,
						finally: f,
						hasCount,
						hasRoute,
						characteristics,
					} = e
					return (
						<View key={`${i}`}>
							<Pressable onPress={() => onChangeContent(i + 1)}>
								<View style={styles.item}>
									<Text style={styles.text1}>{title}</Text>
									<View
										style={
											open === i + 1 && !hasRoute
												? styles.opened
												: styles.closed
										}
									>
										<ChevronRightIcon
											size={20}
											color={
												open === i + 1
													? colors.blue
													: colors.black
											}
										/>
									</View>
								</View>
							</Pressable>
							{open === i + 1 && !hasRoute ? (
								renderContent(e)) : null}
						</View>
					)
				}
			)}
		</View>
	);
};

export default Accordion;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
	},
	item: {
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		borderBottomColor: colors.lightGray,
	},
	content: {
		padding: 14,
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGray,
	},
	characteristics: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text6: {
		fontSize: 12,
		paddingTop: 3,
		lineHeight: 14,
		fontWeight: 'bold',
	},
	text7: {
		fontSize: 12,
		paddingTop: 5,
		lineHeight: 14,
		fontWeight: '400',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	left: {
		flex: 0.5,
	},
	right: {
		flex: 0.5,
		alignItems: 'flex-end',
	},
	closed: {
		transform: [{ rotate: '90deg' }],
	},
	opened: {
		transform: [{ rotate: '-90deg' }],
	},
	text1: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '400',
	},
	border: {
		width: 20,
		height: 20,
		left: 115,
		fontSize: 12,
		opacity: 0.8,
		borderRadius: 30,
		alignItems: 'center',
		backgroundColor: colors.blue,
	},
	borderText: {
		fontSize: 12,
		color: colors.white,
	},
	text2: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: '700',
	},
	text3: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: '700',
	},
	text4: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: '400',
	},
	text5: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: '600',
		textAlign: 'center',
	},
	mt10: {
		marginTop: 10,
	},
	mt14: {
		marginTop: 14,
	},
	mt20: {
		marginTop: 20,
	},
});
