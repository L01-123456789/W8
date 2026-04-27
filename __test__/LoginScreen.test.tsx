import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../app/screens/LoginScreen';

// Mock các validators
jest.mock('../app/helpers/emailValidator', () => ({
  emailValidator: (email) => (email === '' ? 'Email required' : ''),
}));
jest.mock('../app/helpers/passwordValidator', () => ({
  passwordValidator: (pass) => (pass === '' ? 'Password required' : ''),
}));

describe('LoginScreen', () => {
  const mockNavigation = {
    reset: jest.fn(),
    navigate: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
  };

  test('Hiển thị lỗi khi để trống trường và nhấn Log in', () => {
    const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
    
    fireEvent.press(getByText('Log in'));
    
    expect(getByText('Email required')).toBeTruthy();
    expect(getByText('Password required')).toBeTruthy();
  });

  test('Chuyển đến HomeScreen khi nhập đúng thông tin', () => {
    const { getByTestId, getByText } = render(<LoginScreen navigation={mockNavigation} />);
    
    // Sử dụng ID đã đặt ở Bước 2
    fireEvent.changeText(getByTestId('login-email-input'), 'test@gmail.com');
    fireEvent.changeText(getByTestId('login-password-input'), '12345678');
    
    fireEvent.press(getByText('Log in'));

    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  });

  test('Chuyển sang màn hình Register khi nhấn Create !', () => {
    const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Create !'));
    expect(mockNavigation.replace).toHaveBeenCalledWith('RegisterScreen');
  });
  test('Chuyển sang màn hình ResetPassword khi nhấn Forgot your password', () => {
    const mockNavigation = { navigate: jest.fn(), goBack: jest.fn() };
    const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
    
    fireEvent.press(getByText('Forgot your password ?'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('ResetPasswordScreen');
  });
});