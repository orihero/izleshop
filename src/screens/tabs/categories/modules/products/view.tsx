import React from 'react';
import { View, Text } from 'react-native';
import Header from 'components/navigation/Header';
import {
	ArrowsIcon,
	FilterIcon,
	MenuLinkIcon,
	SearchIcon,
} from 'assets/icons/icons';
import { styles } from './style';
import { colors } from 'constants/colors';
import { strings } from 'locales/locales';

const ProductsView = () => {
	return (
		<View style={styles.flex1}>
			<Header
				rightEdge={() => <SearchIcon size={20} />}
				title={'Samsung'}
				bold
			/>
			<View style={styles.container}>
				<View style={styles.ph20}>
					<View style={styles.top}>
						<View style={styles.topb}>
							<FilterIcon color={colors.gray} />
							<Text style={styles.text1}>{strings.filter}</Text>
						</View>
						<View style={styles.topb}>
							<ArrowsIcon color={colors.gray} />
							<Text style={styles.text1}>{strings.sort}</Text>
						</View>
						<View style={styles.topb}>
							<MenuLinkIcon />
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ProductsView;
