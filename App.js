/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

// const App: () => React$Node = () => {
const App = () => {
	const onPress = () => {
		Alert.alert('Test');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Bumpt</Text>
			<Text style={styles.h2}>Virtual business cards</Text>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text style={styles.buttonText}>Sign Up with Google</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text style={styles.buttonText}>Sign Up with Facebook</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text style={styles.buttonText}>Sign Up with Email</Text>
			</TouchableOpacity>
			<Text style={styles.p}>By signing up, you agree to our Terms of Service</Text>
			<Text style={styles.p}>and Privacy Policy.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	h1: {
		fontSize: 32
	},
	h2: {
		marginBottom: 32,
		fontSize: 16
	},
	p: {
		fontSize: 12
	},
	button: {
		width: '90%',
		marginBottom: 16,
		padding: 12,
		borderRadius: 4,
		backgroundColor: '#ffffff'
	},
	buttonText: {
		fontSize: 16,
		color: '#333',
		textAlign: 'center'
	}
});

export default App;