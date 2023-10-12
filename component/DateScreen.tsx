import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ImageBackground, Modal, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as colors from './colors';

type InitialScreenProps = {
  navigation: NavigationProp<any>;
};

const DateScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState<boolean>(false);
  const [datePickerFlag, setDatePickerFlag] = useState<boolean>(false);

  const handleContinue = () => {
    if (isButtonEnabled) {
      navigation.navigate('WorkoutScreen');
    } else {
      // Handle validation errors
    }
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
    setDatePickerFlag(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleDateChange = (event: any, date: any) => {
    if (date && datePickerFlag) {
      setSelectedDate(date);
      setIsButtonEnabled(true);
      hideDatePicker();
      setDatePickerFlag(false);
    }
  };

  return (
    <ImageBackground
      source={require('../images/due-date-background-image.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>When is your baby due, Sam?</Text>
      {/* Button to show the DateTimePicker */}
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.dateLabel}>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>
      {/* Modal for DateTimePicker */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isDatePickerVisible}
        onRequestClose={hideDatePicker}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              minimumDate={new Date(2023, 0, 1)}
              maximumDate={new Date(2030, 11, 31)}
              onChange={handleDateChange}
              style={styles.datePicker}
            />
          </View>
        </View>
      </Modal>
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
  dateLabel: {
    fontSize: 20,
    color: colors.LIGHT_BLUE,
    backgroundColor: colors.LIGHT_GREY,
    padding: 5,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.WHITE,
  },
  datePicker: {
    width: '100%',
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
