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
import FavoriteItem from 'screens/tabs/cart/components/FavoriteItem';
import { requests } from 'api/requests';
import { divideArr } from 'utils/divideArr';
import SortModal from '../../components/SortModal';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp,
} from './controller';
import { styles } from './style';
import _ from 'underscore';
import { sorts } from '../../components/SortModal';
import { IPage } from 'screens/tabs/home/controller';
import { windowWidth } from 'constants/sizes';
import { ActivityIndicator } from 'react-native-paper';

interface IProductsView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
	setPage: (prev: number) => SetStateAction<IPage>;
	page: number;
	products: [];
	loading: boolean;
}

const ProductsView = ({
	route,
	navigation,
	page,
	products,
	setProducts,
	setPage,
}: IProductsView) => {
	const [isList, setIsList] = useState(false);
	const [sortOpen, setSortOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	// const [products, setProducts] = useState([]);
	const onFilterPress = () => {
		navigation?.navigate(Routes.FILTER, { from: route?.params.from });
	};
	let dontFetch = true;

	let effect = async () => {
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
				pageSize: 100,
			});
			setProducts(res.data.data);
		} catch (error) {}
	};
	// let productss = divideArr(products, 2);
	let productss = products || [];
	useEffect(() => {
		effect();
		console.log('RERENDERING');
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
				<ScrollView showsVerticalScrollIndicator={false}>
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
									<Text style={styles.text1}>
										{strings.sort}
									</Text>
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
							products?.map((e, i) => (
								<View key={i} style={styles.mt10}>
									<FavoriteItem
										hasBasket={true}
										hasRemove={false}
										item={{ data: e }}
									/>
								</View>
							))
						) : (
							<FlatList
								contentContainerStyle={styles.flatList}
								snapToInterval={windowWidth / 2 - 5}
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
								decelerationRate={'fast'}
								showsVerticalScrollIndicator={false}
								keyExtractor={(e) => e.id.toString()}
							/>
						)}
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default ProductsView;
