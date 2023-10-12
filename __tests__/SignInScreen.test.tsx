import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignInScreen from '../component/SignInScreen';

interface Navigation {
  navigate: jest.Mock;
}

const navigation: Navigation = {
  navigate: jest.fn(),
};

describe('SignInScreen', () => {
  it('disables the "Log in" button when no input is provided', () => {
    // @ts-ignore
    const { getByTestId, queryByTestId } = render(<SignInScreen navigation={navigation} />);
    const loginButton = getByTestId('login-button');
    // @ts-ignore
    expect(loginButton).toBeDisabled();
    fireEvent.changeText(getByTestId('email-input'), 'test@example.com');
    fireEvent.changeText(getByTestId('password-input'), 'password123');
    // @ts-ignore
    expect(loginButton).toBeEnabled();
  });
});
