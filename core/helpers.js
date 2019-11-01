import { AsyncStorage } from 'react-native';

export const isToday = (date) => {
  const today = new Date();
  return date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear();
}

export const getUserID = async () => {
  try {
    const id = await AsyncStorage.getItem('id');
    if (id) return id;
    else return null;
  } catch(error) {
    // TODO
  }
}
