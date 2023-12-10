import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error storing data:', error);
    return false;
  }
};

const loadData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

const storeDayFlowItems = async data => {
  return storeData("dayFlowItems", data)
}

const loadDayFlowItems = async () => {
  return loadData("dayFlowItems")
}

export { storeData, loadData, storeDayFlowItems, loadDayFlowItems };
