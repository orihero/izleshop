import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import { colors } from 'constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from 'components/navigation/Header';
import { strings } from 'locales/locales';
import DefaultInput from 'components/general/DefaultInput';

const Auth = () => {
	const insets = useSafeAreaInsets();
	const [activeContent, setActiveContent] = useState(false);
	const [phone, setPhone] = useState('+998');
	const [password, setPassword] = useState('');

	return (
		<View style={[styles.preContainer, { paddingTop: insets.top }]}>
			<View style={styles.container}>
				<Header hideRightIcon disableGoBack title={strings.welcome} />
				<View style={styles.main}>
					<View style={styles.titleRow}>
						<TouchableWithoutFeedback
							onPress={() => setActiveContent(false)}
						>
							<View
								style={[
									styles.titleBox,
									!activeContent ? styles.bbl : styles.blb,
								]}
							>
								<Text
									style={[
										styles.text1,
										!activeContent
											? styles.cbl
											: styles.clb,
									]}
								>
									Text 1
								</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={() => setActiveContent(true)}
						>
							<View
								style={[
									styles.titleBox,
									activeContent ? styles.bbl : styles.blb,
								]}
							>
								<Text
									style={[
										styles.text1,
										activeContent ? styles.cbl : styles.clb,
									]}
								>
									Text 2
								</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text2}
						>{`${strings.phoneNumber}*`}</Text>
						<View style={styles.mt12}>
							<DefaultInput value={phone} onChange={setPhone} />
						</View>
					</View>
					<View style={styles.mt20}>
						<Text
							style={styles.text2}
						>{`${strings.enterPassword}*`}</Text>
						<View style={styles.mt12}>
							<DefaultInput
								value={password}
								onChange={setPassword}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Auth;

const styles = StyleSheet.create({
	preContainer: {
		flex: 1,
		backgroundColor: colors.white,
	},
	container: {
		flex: 1,
		backgroundColor: colors.lightBlue,
	},
	main: {
		paddingTop: 20,
		paddingHorizontal: 20,
	},
	titleRow: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	titleBox: {
		borderBottomWidth: 1,
	},
	text1: {
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '600',
	},
	text2: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		color: 'rgba(0,0,0,.8)',
	},
	clb: {
		color: colors.lightBrown,
	},
	cbl: {
		color: colors.black,
	},
	blb: {
		borderColor: colors.lightBrown,
	},
	bbl: {
		borderColor: colors.black,
	},
	mt12: {
		marginTop: 12,
	},
	mt20: {
		marginTop: 20,
	},
});
