import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';

const CategoriewView = () => {
	return (
		<View>
			<FlatList data={categories} renderItem={CategoriesItem} />
		</View>
	);
};

export default CategoriewView;

const styles = StyleSheet.create({});
