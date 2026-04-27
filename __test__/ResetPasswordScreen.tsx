import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResetPasswordScreen from '../app/screens/ResetPasswordScreen';

describe('ResetPasswordScreen', () => {
  const mockNavigation = { navigate: jest.fn(), goBack: jest.fn() };

  test('Hiển thị mô tả về việc nhận email reset', () => {
    const { getByText } = render(<ResetPasswordScreen navigation={mockNavigation} />);
    expect(getByText('You will receive an email with the reset link.')).toBeTruthy();
  });

  test('Chuyển về LoginScreen sau khi nhập email hợp lệ và nhấn Continue', () => {
    const { getByLabelText, getByText } = render(<ResetPasswordScreen navigation={mockNavigation} />);
    fireEvent.changeText(getByLabelText('Email'), 'user@test.com');
    fireEvent.press(getByText('Continue'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('LoginScreen');
  });
});