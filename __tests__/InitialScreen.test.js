import React from 'react';
import { render } from '@testing-library/react-native';
import InitialScreen from '../component/InitialScreen';

const navigation = {
  navigate: jest.fn(),
};

describe('InitialScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<InitialScreen navigation={navigation} />);
    expect(getByText("For a fit and relaxed pregnancy")).toBeTruthy();
    expect(getByText("Get Started")).toBeTruthy();
    expect(getByText("Or Login")).toBeTruthy();
  });
});
