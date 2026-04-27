import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../app/screens/HomeScreen';

describe('HomeScreen', () => {
  const mockNavigation = { reset: jest.fn() };

  // Case 1: Render không crash
  it('nên hiển thị màn hình Home mà không bị crash', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Welcome 💫')).toBeTruthy();
  });

  // Case 2: Kiểm tra Button Press
  it('nên gọi reset navigation khi nhấn nút Sign out', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    const button = getByText('Sign out');
    fireEvent.press(button);
    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    });
  });

  // Case 3: Kiểm tra hiển thị nội dung Paragraph
  it('nên hiển thị dòng chữ chúc mừng đăng nhập', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Congratulations you are logged in.')).toBeTruthy();
  });
});