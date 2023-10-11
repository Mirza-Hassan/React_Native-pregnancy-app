import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignInScreen from '../component/SignInScreen';

describe('SignInScreen', () => {
  it('disables the "Log in" button when no input is provided', () => {
    const { getByTestId, queryByTestId } = render(<SignInScreen />);
    const loginButton = getByTestId('login-button');
    expect(loginButton).toBeDisabled();
    fireEvent.changeText(getByTestId('email-input'), 'test@example.com');
    fireEvent.changeText(getByTestId('password-input'), 'password123');
    expect(loginButton).toBeEnabled();
  });
});
