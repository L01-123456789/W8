import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../app/components/Button';
import TextInput from '../app/components/TextInput';
import BackButton from '../app/components/BackButton';

describe('Common Components', () => {
  test('Button render đúng và nhận sự kiện press', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button mode="contained" onPress={onPressMock}>Click Me</Button>
    );
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  test('TextInput hiển thị lỗi khi có errorText', () => {
    const { getByText } = render(
      <TextInput label="Email" errorText="Email is invalid" />
    );
    expect(getByText('Email is invalid')).toBeTruthy();
  });

  test('BackButton gọi hàm goBack khi nhấn', () => {
    const goBackMock = jest.fn();
    const { getByTestId } = render(<BackButton goBack={goBackMock} />);
    
    const btn = getByTestId('back-button');
    fireEvent.press(btn);
    
    expect(goBackMock).toHaveBeenCalled();
  });
});