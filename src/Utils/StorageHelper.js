// Function to get data from localStorage
export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Function to set data to localStorage
export const setDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Function to remove data from localStorage
export const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

