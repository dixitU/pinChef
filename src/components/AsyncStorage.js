import AsyncStorage from '@react-native-community/async-storage';

export const setItems = async (key, data) => {
  try {
    await AsyncStorage.setItem(`@${key}`, `${data}`);
  } catch (error) {
    // Error saving data
  }
};

export const getItems = async (key) => {
  let response = [];
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      response = value;
      return value;
    } else {
      response = null;
    }
  } catch (error) {
    // Error retrieving data
  }
  return response;
};
