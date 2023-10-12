import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as colors from './colors';
import { NavigationProp } from '@react-navigation/native';

type InitialScreenProps = {
  navigation: NavigationProp<any>;
};

const InitialScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/first-intro-image.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlayContainer}>
        <Image
          source={require('../images/keleya-logo.png')}
          style={styles.logo}
          />
        <Text style={styles.logoText}>
          For a fit and relaxed{"\n"}pregnancy
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.buttonStartText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.buttonLoginText}>Or Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "stretch"
  },
  logoText: {
    fontSize: 24,
    marginTop: 10,
    color: colors.GREYISH_BROWN,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.PALE_TEAL,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonLoginText: {
    color: colors.GREYISH_BROWN,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStartText: {
    color: colors.WHITE,
    fontSize: 18,
  },
});

export default InitialScreen;
