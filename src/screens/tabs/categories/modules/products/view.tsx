import React, { useState } from 'react';
import {
	ProductsScreenNavigationProp,
	ProductsScreenRouteProp,
} from './controller';

import { View, Text, ScrollView } from 'react-native';
import Header from 'components/navigation/Header';
import Pressable from 'components/general/Pressable';
import ProductItem from 'components/special/ProductItem';
import VerticalItem from 'components/special/VerticalItem';
import HorizontalItem from 'components/special/HorizontalItem';
import OrderItem from 'components/special/OrderItem';
import SortModal from '../../components/SortModal';

import { colors } from 'constants/colors';
import { strings } from 'locales/locales';
import { products } from 'screens/tabs/home/data';
import { divideArr } from 'utils/divideArr';
import { orderItems } from 'mockup/data';
import {
	ArrowsIcon,
	CategoriesIcon,
	FilterIcon,
	MenuLinkIcon,
	SearchIcon,
} from 'assets/icons/icons';
import { styles } from './style';
import { Routes } from 'constants/routes';

let productss = divideArr(products, 2);

interface IProductsView {
	route?: ProductsScreenRouteProp;
	navigation?: ProductsScreenNavigationProp;
}

const ProductsView = ({ route, navigation }: IProductsView) => {
	const [isList, setIsList] = useState(false);
	const [sortOpen, setSortOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const onFilterPress = () => {
		navigation?.navigate(Routes.FILTER, { from: route?.params.from });
	};

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
										<MenuLinkIcon />
									)}
								</View>
							</Pressable>
						</View>
						{isList
							? products.map((e, i) => (
									<View key={i} style={styles.mt10}>
										<HorizontalItem
											hasBasket
											hasRating
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
