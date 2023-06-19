export const getLocalStorageItem = <T>(key: string): T | undefined => {
  const localStorageData = localStorage.getItem(key);
  return localStorageData ? JSON.parse(localStorageData) : undefined;
};
