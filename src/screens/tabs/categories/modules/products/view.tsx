import { requests } from 'api/requests';
import {
	ArrowsIcon,
	CategoriesIcon,
	FilterIcon,
	MenuLinkIcon,
	SearchIcon,
} from 'assets/icons/icons';
import Pressable from 'components/general/Pressable';
import Header from 'components/navigation/Header';
import VerticalItem from 'components/special/VerticalItem';
import { colors } from 'constants/colors';
import { Routes } from 'constants/routes';
import { strings } from 'locales/locales';
import React, { SetStateAction, useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import FavoriteItem from 'screens/tabs/cart/components/FavoriteItem';
import { IPage } from 'screens/tabs/home/controller';
import { throttle } from 'underscore';
import SortModal, { sorts } from '../../components/SortModal';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp,
} from './controller';
import { styles } from './style';

interface IProductsView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
	setPage: (prev: number) => SetStateAction<IPage>;
	page: number;
	products: [];
	loading: boolean;
}

const ProductsView = ({ route, navigation }: IProductsView) => {
	const [isList, setIsList] = useState(false);
	const [sortOpen, setSortOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [products, setProducts] = useState([]);
	const onFilterPress = () => {
		navigation?.navigate(Routes.FILTER, {
			from: route?.params.from,
			setProducts,
			title: route?.params.title,
		});
	};

	let effect = async () => {
		console.log(route?.params);

		if (loading) {
			return;
		}
		setLoading(true);
		let params = {
			...(route.params || {}),
		};
		if (activeIndex !== -1) {
			params = {
				...params,
				[sorts[activeIndex].tag]: sorts[activeIndex].value,
			};
		}
		try {
			let res = await requests.product.getProducts({
				...params,
				page,
				pageSize: 10,
			});
			setProducts([...products, ...res.data.data]);
			setPage((e) => e + 1);
		} catch (error) {}
		setLoading(false);
	};
	let onEndReached = throttle(effect, 1000);
	useEffect(() => {
		effect();
	}, [route?.params, activeIndex]);

	return (
		<View style={styles.flex1}>
			{sortOpen ? (
				<SortModal
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					sortOpen={sortOpen}
					setSortOpen={setSortOpen}
				/>
			) : null}
			<Header
				rightEdge={() => <SearchIcon size={20} />}
				title={route?.params.title}
				bold
			/>
			<View style={styles.container}>
				<View style={styles.ph20}>
					<View style={styles.top}>
						<Pressable onPress={() => onFilterPress()}>
							<View style={styles.topb}>
								<FilterIcon color={colors.gray} />
								<Text style={styles.text1}>
									{strings.filter}
								</Text>
							</View>
						</Pressable>
						<Pressable onPress={() => setSortOpen(true)}>
							<View style={styles.topb}>
								<ArrowsIcon color={colors.gray} />
								<Text style={styles.text1}>{strings.sort}</Text>
							</View>
						</Pressable>
						<Pressable onPress={() => setIsList(!isList)}>
							<View style={styles.topb}>
								{isList ? (
									<CategoriesIcon active size={20} />
								) : (
									<MenuLinkIcon color={colors.gray} />
								)}
							</View>
						</Pressable>
					</View>
					{isList ? (
						<ScrollView>
							{products?.map((e, i) => (
								<View key={i} style={styles.mt10}>
									<FavoriteItem
										hasBasket={true}
										hasRemove={false}
										item={{ data: e }}
									/>
								</View>
							))}
						</ScrollView>
					) : (
						<FlatList
							contentContainerStyle={styles.flatList}
							data={products.length ? products : []}
							numColumns={2}
							renderItem={({ item, index }) => (
								<View style={styles.flatBox}>
									<VerticalItem
										key={`${index}`}
										item={item}
										sizeChanged
									/>
								</View>
							)}
							// decelerationRate={'fast'}
							showsVerticalScrollIndicator={false}
							keyExtractor={(e) => e.id.toString()}
							onEndReachedThreshold={0.5}
							onEndReached={onEndReached}
							initialNumToRender={10}
							extraData={[loading]}
							ListEmptyComponent={() => (
								<View
									style={{
										flex: 1,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									{loading ? (
										<ActivityIndicator />
									) : (
										<Text style={styles.text}>
											{strings.noItems}
										</Text>
									)}
								</View>
							)}
						/>
					)}
				</View>
			</View>
		</View>
	);
};

export default ProductsView;
