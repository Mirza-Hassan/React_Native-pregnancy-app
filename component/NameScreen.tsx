import React, { useState } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as colors from './colors';
import { NavigationProp } from '@react-navigation/native';

type NameScreenProps = {
  navigation: NavigationProp<any>;
};

const NameScreen: React.FC<NameScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');

  const isButtonEnabled = name.length > 0;

  const handleContinue = () => {
    if (isButtonEnabled) {
      navigation.navigate('DateScreen');
    } else {
      // Handle validation errors
    }
  };

  return (
    <ImageBackground
      source={require('../images/couch_smile.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          It's great that you're here! First{"\n"}
          things first, what should we {"\n"}call you?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          onChangeText={(text) => setName(text)}
          placeholderTextColor={colors.LIGHT_GREY}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isButtonEnabled ? colors.PALE_TEAL : colors.LIGHT_GREY }]}
          onPress={handleContinue}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>Continue</Text>
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
  input: {
    width: 300,
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: colors.LIGHT_GREY,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NameScreen;
