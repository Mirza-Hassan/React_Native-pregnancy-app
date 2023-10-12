import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignupScreen from '../component/SignUpScreen';

interface Navigation {
  navigate: jest.Mock;
}

const navigation: Navigation = {
  navigate: jest.fn(),
};

test('renders SignupScreen and enables button on input', () => {
  // @ts-ignore
  const { getByPlaceholderText, getByText } = render(<SignupScreen navigation={navigation} />);
  
  const emailInput = getByPlaceholderText('example@gmail.com');
  const passwordInput = getByPlaceholderText('Enter a Password');
  const createAccountButton = getByText('Create Account');
  // @ts-ignore
  expect(createAccountButton).toBeDisabled();
  
  fireEvent.changeText(emailInput, 'test@example.com');
  fireEvent.changeText(passwordInput, 'password123');
  fireEvent.press(getByText("I've read the Privacy Policy"));
  fireEvent.press(getByText("I accept the terms & conditions and Keleya's advice"));
  // @ts-ignore
  expect(createAccountButton).toBeEnabled();
});
