import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignupScreen from '../component/SignUpScreen';

describe('SignupScreen', () => {
  it('disables the "Create Account" button when not all fields are filled and checkboxes are unchecked', () => {
    const { getByTestId, queryByTestId } = render(<SignupScreen />);
    const createAccountButton = getByTestId('create-account-button');
    expect(createAccountButton).toBeDisabled();
    fireEvent.changeText(getByTestId('email-input'), 'test@example.com');
    fireEvent.changeText(getByTestId('password-input'), 'password123');
    expect(createAccountButton).toBeDisabled();
    fireEvent.press(getByTestId('checkbox-1'));
    fireEvent.press(getByTestId('checkbox-2'));
    expect(createAccountButton).toBeEnabled();
  });
});
