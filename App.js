/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native';

// const App: () => React$Node = () => {
const App = () => {
	const onPress = () => {
		Alert.alert('Test');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.signInContainer}>
				<TouchableOpacity style={styles.button} onPress={onPress}>
					<Text style={styles.buttonText}>Sign In</Text>
				</TouchableOpacity>
			</View>

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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1
	},
	h1: {
		fontSize: 32,
		color: '#0099ff'
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
		padding: 10,
		borderRadius: 4,
		backgroundColor: '#ffffff'
	},
	buttonText: {
		fontSize: 14,
		color: '#333',
		textAlign: 'center'
	}
});

export default App;