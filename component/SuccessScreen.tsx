import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import LocalizedStrings from 'react-native-localization';
import * as colors from './colors';
import en from '../Languages/en';
import de from '../Languages/de';

const SuccessScreen: React.FC = () => {
  const strings = new LocalizedStrings({ en, de });

  return (
    <ImageBackground
      source={require('../images/notifications-background-image.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Get notifications to boost{"\n"}your motivation</Text>
        <TouchableOpacity>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          disabled={false}
        >
          <Text style={styles.buttonText}>Allow notifications</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.LIGHT_GREY,
    marginBottom: 20,
    textAlign: 'center',
  },
  skipButtonText: {
    color: colors.LIGHT_GREY,
    fontSize: 14,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.PALE_TEAL,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
});

export default SuccessScreen;
