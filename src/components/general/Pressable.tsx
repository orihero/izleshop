import React, { ReactChild } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

interface IPressableProps {
	to?: boolean;
	onPress: () => void;
	children: ReactChild;
}

const Pressable = ({ to, onPress, children }: IPressableProps) => {
	return to ? (
		<TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
	) : (
		<TouchableWithoutFeedback onPress={onPress}>
			{children}
		</TouchableWithoutFeedback>
	);
};

export default Pressable;
