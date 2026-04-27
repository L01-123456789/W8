// jest.setup.js

// Sửa lỗi ReferenceError: import file outside of scope (Dòng này quan trọng nhất)
global.__ExpoImportMetaRegistry = {};

// Mock Navigation để test các hàm navigate/reset
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      reset: jest.fn(),
    }),
  };
});

