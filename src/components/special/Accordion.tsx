import React, { useState } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Pressable from '../general/Pressable';

import { ChevronRightIcon } from 'assets/icons/icons';
import { colors } from 'constants/colors';
import {
	IAccordionItem,
	IAccordionContent,
	IAccordion,
	item,
} from 'mockup/data';
import { CommentsScreen as Comments } from 'screens/tabs';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants/routes';
import RenderHTML from 'react-native-render-html';

interface IAccordionProps {
	items: any;
}

const Accordion = ({
	items,
	characteristcs: data,
	details,
}: IAccordionProps) => {
	const [open, setOpen] = useState(0);
	const navigation = useNavigation();

	const onChangeContent = (index: number) => {
		console.log({ index });
		if (index === 1) {
			//@ts-ignore
			navigation.navigate(Routes.WITHOUT_TABS, {
				screen: Routes.INSTALLMENT,
				params: { data: details },
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
					{
						title,
						content,
						finally: f,
						hasCount,
						hasRoute,
						characteristics,
					}: IAccordion,
					i: number
				) => (
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
							<View style={styles.content}>
								{!content ? (
									hasCount ? (
										<Comments />
									) : (
										characteristics &&
										Object.keys(data || {})?.map((e) => {
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
									)
								) : (
									// characteristics &&
									// Object.keys(
									// 	data.characteristics || {}
									// )?.map((e) => {
									// 	return (
									// 		<View>
									// 			<Text>{e}</Text>
									// 			<Text>
									// 				{
									// 					data
									// 						.characteristics[
									// 						e
									// 					]
									// 				}
									// 			</Text>
									// 		</View>
									// 	);
									// })
									content.map(
										(
											{
												preTitle,
												items,
											}: IAccordionContent,
											ii: number
										) => (
											<View key={`${i}/${ii}`}>
												{preTitle ? (
													<Text
														style={[
															styles.text2,
															ii
																? styles.mt20
																: null,
														]}
													>
														{preTitle}
													</Text>
												) : null}
												{items.map(
													(
														{
															key,
															value,
															row,
														}: IAccordionItem,
														iii: number
													) =>
														row ? (
															<View
																key={`${i}/${ii}/${iii}`}
																style={[
																	styles.row,
																	iii
																		? styles.mt10
																		: i ===
																		  2
																		? styles.mt20
																		: null,
																]}
															>
																<View
																	style={
																		styles.left
																	}
																>
																	<Text
																		style={
																			styles.text3
																		}
																	>
																		{key}
																	</Text>
																</View>
																<View
																	style={
																		styles.right
																	}
																>
																	<Text
																		style={
																			styles.text4
																		}
																	>
																		{value}
																	</Text>
																</View>
															</View>
														) : (
															<View
																key={`${i}/${ii}/${iii}`}
																style={
																	iii
																		? styles.mt10
																		: styles.mt20
																}
															>
																<Text
																	style={
																		styles.text3
																	}
																>
																	{key}
																</Text>
																<Text
																	style={
																		styles.text4
																	}
																>
																	{value}
																</Text>
															</View>
														)
												)}
											</View>
										)
									)
								)}
								{f ? (
									<View style={styles.mt14}>
										<Text style={styles.text5}>
											{`${f} +99871 123 45 67`}
										</Text>
									</View>
								) : null}
							</View>
						) : null}
					</View>
				)
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
