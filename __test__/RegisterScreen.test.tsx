import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from '../app/screens/RegisterScreen';

describe('RegisterScreen', () => {
  const mockNavigation = {
    reset: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
  };

  test('Render đầy đủ các input Name, Email, Password', () => {
    const { getByTestId } = render(<RegisterScreen navigation={mockNavigation} />);
    expect(getByTestId('register-name-input')).toBeTruthy();
    expect(getByTestId('register-email-input')).toBeTruthy();
    expect(getByTestId('register-password-input')).toBeTruthy();
  });

  test('Nhấn Log in chuyển hướng về LoginScreen', () => {
    const { getByText } = render(<RegisterScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Log in'));
    expect(mockNavigation.replace).toHaveBeenCalledWith('LoginScreen');
  });
});