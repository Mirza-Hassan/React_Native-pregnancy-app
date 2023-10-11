import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import * as colors from './colors';

type InitialScreenProps = {
  navigation: NavigationProp<any>;
};

const DateScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const handleContinue = () => {
    if (isButtonEnabled) {
      navigation.navigate('WorkoutScreen');
    } else {
      // Handle validation errors
    }
  };

  return (
    <ImageBackground
      source={require('../images/due-date-background-image.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>When is your baby due, Sam?</Text>
      <TouchableOpacity onPress={() => setIsButtonEnabled(true)}>
        <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isButtonEnabled ? colors.PALE_TEAL : colors.LIGHT_GREY }]}
        onPress={handleContinue}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.WARM_GREY,
  },
  dateText: {
    fontSize: 20,
    color: colors.LIGHT_BLUE,
    backgroundColor: colors.LIGHT_GREY,
    padding: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DateScreen;
