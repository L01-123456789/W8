import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StartScreen from '../app/screens/StartScreen';

describe('OnboardingScreen', () => {
  const mockNavigation = { navigate: jest.fn() };

  // Case 1: Render nội dung
  it('nên hiển thị tiêu đề chào mừng của ứng dụng', () => {
    const { getByText } = render(<StartScreen navigation={mockNavigation} />);
    expect(getByText('Welcome to Exlogrn')).toBeTruthy();
  });

  // Case 2: Nhấn nút Login
  it('nên chuyển sang màn hình Login khi nhấn nút Log in', () => {
    const { getByText } = render(<StartScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Log in'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('LoginScreen');
  });

  // Case 3: Nhấn nút Register
  it('nên chuyển sang màn hình Register khi nhấn nút Create an account', () => {
    const { getByText } = render(<StartScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Create an account'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('RegisterScreen');
  });
});