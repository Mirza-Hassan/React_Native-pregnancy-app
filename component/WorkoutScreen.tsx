import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import * as colors from './colors';
import { NavigationProp } from '@react-navigation/native';

type WorkoutScreenProps = {
  navigation: NavigationProp<any>;
};

const WorkoutScreen: React.FC<WorkoutScreenProps> = ({ navigation }) => {
  const [selectedFrequency, setSelectedFrequency] = useState('3 times a week');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleContinue = () => {
    if (isButtonEnabled) {
      navigation.navigate('SuccessScreen');
    } else {
      // Handle validation errors
    }
  };

  const handleFrequencySelection = (frequency: string) => {
    setSelectedFrequency(frequency);
    setIsButtonEnabled(true);
  };

  return (
    <ImageBackground
      source={require('../images/workout-goal-background-image.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>How many times a week do{"\n"}you want to be active?</Text>
     <View style={styles.selectionInput}>
        <Picker
          selectedValue={selectedFrequency}
          onValueChange={(itemValue: string) => handleFrequencySelection(itemValue)}
        >
          <Picker.Item label="3 times a week" value="3 times a week" />
          <Picker.Item label="4 times a week" value="4 times a week" />
          <Picker.Item label="5 times a week" value="5 times a week" />
        </Picker>
      </View>
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
    marginBottom: 20,
    color: colors.WARM_GREY,
    textAlign: 'center',
  },
  selectionInput: {
    width: 300,
    height: 40,
    marginBottom: 20,
    backgroundColor: colors.LIGHT_GREY,
  },
  button: {
    backgroundColor: colors.GREYISH_BROWN,
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

export default WorkoutScreen;
