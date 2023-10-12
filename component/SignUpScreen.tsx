import React, { useState } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import * as colors from './colors';
import { NavigationProp } from '@react-navigation/native';

type SignupScreenProps = {
  navigation: NavigationProp<any>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const isButtonEnabled = email.length > 0 && password.length > 0 && isChecked1 && isChecked2;

  const handleSignup = () => {
    if (isButtonEnabled) {
      navigation.navigate('NameScreen');
    } else {
      // Handle validation errors
    }
  };

  return (
    <ImageBackground
      source={require('../images/authentication-background-image.jpg')}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>Add your details below to set up an account</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={colors.LIGHT_GREY}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter a Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={colors.LIGHT_GREY}
          underlineColorAndroid="transparent"
        />
        <View style={styles.checkboxRow}>
          <Checkbox.Android
            status={isChecked2 ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked2(!isChecked2)}
            color={colors.WHITE}
          />
          <Text style={styles.checkboxText}>I've read the Privacy Policy</Text>
        </View>
        <View style={styles.checkboxRow}>
          <Checkbox.Android
            status={isChecked1 ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked1(!isChecked1)}
            color={colors.WHITE}
          />
          <Text style={styles.checkboxText}>I accept the terms & conditions and Keleya's advice</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isButtonEnabled ? colors.PALE_TEAL : colors.LIGHT_GREY }]}
          onPress={handleSignup}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
      </ScrollView>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
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
    color: colors.LIGHT_GREY,
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT_GREY,
  },
  checkboxRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkboxText: {
    color: colors.LIGHT_GREY,
    marginLeft: 10,
  },
  button: {
    backgroundColor: colors.GREYISH_BROWN,
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

export default SignupScreen;
