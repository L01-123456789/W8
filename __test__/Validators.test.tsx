import { nameValidator } from '../app/helpers/nameValidator';
import { passwordValidator } from '../app/helpers/passwordValidator';
import { emailValidator } from '../app/helpers/emailValidator';

describe('Validators Logic Test', () => {
  
  // 1. Test cho nameValidator
  describe('nameValidator', () => {
    test('nên trả về lỗi nếu tên để trống', () => {
      expect(nameValidator('')).toBe('Please fill in this field.');
    });

    test('nên trả về chuỗi rỗng nếu tên hợp lệ', () => {
      expect(nameValidator('John Doe')).toBe('');
    });
  });

  // 2. Test cho passwordValidator
  describe('passwordValidator', () => {
    test('nên trả về lỗi nếu mật khẩu để trống', () => {
      expect(passwordValidator('')).toBe('Please fill in this field.');
    });

    test('nên trả về lỗi nếu mật khẩu ngắn hơn 8 ký tự', () => {
      expect(passwordValidator('1234567')).toBe('Password should contain at least 8 characters.');
    });

    test('nên trả về chuỗi rỗng nếu mật khẩu từ 8 ký tự trở lên', () => {
      expect(passwordValidator('12345678')).toBe('');
    });
  });

  // 3. Test cho emailValidator
  describe('emailValidator', () => {
    test('nên trả về lỗi nếu email để trống', () => {
      expect(emailValidator('')).toBe('Please fill in this field.');
    });

    test('nên trả về lỗi nếu định dạng email sai (thiếu @ hoặc tên miền)', () => {
      expect(emailValidator('abc')).toBe('Please enter a valid email address!');
      expect(emailValidator('abc@com')).toBe('Please enter a valid email address!');
    });

    test('nên trả về chuỗi rỗng nếu định dạng email đúng', () => {
      expect(emailValidator('test@example.com')).toBe('');
    });
  });

});