import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import InitialScreen from '../component/InitialScreen';

interface Navigation {
  navigate: jest.Mock;
}

const navigation: Navigation = {
  navigate: jest.fn(),
};

describe('InitialScreen', () => {
  it('renders correctly', () => {
    // @ts-ignore
    const { getByText }: RenderAPI = render(<InitialScreen navigation={navigation} />);
    expect(getByText("For a fit and relaxed pregnancy")).toBeTruthy();
    expect(getByText("Get Started")).toBeTruthy();
    expect(getByText("Or Login")).toBeTruthy();
  });
});
