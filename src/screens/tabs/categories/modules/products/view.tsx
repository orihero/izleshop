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
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import FavoriteItem from 'screens/tabs/cart/components/FavoriteItem';
import { requests } from 'api/requests';
import { divideArr } from 'utils/divideArr';
import SortModal from '../../components/SortModal';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp,
} from './controller';
import { styles } from './style';

interface IProductsView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
}

const ProductsView = ({ route, navigation }: IProductsView) => {
	const [isList, setIsList] = useState(false);
	const [sortOpen, setSortOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [products, setProducts] = useState([]);
	const onFilterPress = () => {
		navigation?.navigate(Routes.FILTER, { from: route?.params.from });
	};

	let effect = async () => {
		let res = await requests.product.getProducts({
			categoryId: route?.params.categoryId,
		});
		console.log(res.data.data);
		setProducts(res.data.data);
	};
	let productss = divideArr(products, 2);

	useEffect(() => {
		effect();
	}, []);

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
						{isList
							? products.map((e, i) => (
									<View key={i} style={styles.mt10}>
										<FavoriteItem
											hasBasket={true}
											hasRemove={false}
											item={{ data: e }}
										/>
									</View>
							  ))
							: productss.map((e, i) => (
									<View key={i} style={styles.productRow}>
										{e.map((ee, ii) =>
											e ? (
												<VerticalItem
													key={`${i}/${ii}`}
													item={ee}
													sizeChanged
												/>
											) : null
										)}
									</View>
							  ))}
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default ProductsView;
