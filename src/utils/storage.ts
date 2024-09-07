const CACHE_KEY = 'weatherCache';
const TIMESTAMP_KEY = 'cacheTimestamp';


export const getCacheFromLocalStorage = <T>(): Record<string, T> => {
  const cache = localStorage.getItem(CACHE_KEY);
  const timestamp = localStorage.getItem(TIMESTAMP_KEY);
  const currentTime = new Date().getTime();
  const timestampTime = new Date(timestamp ?? 0).getTime();
  const cacheRetrivalTime = 5 * 60 * 1000; // 5 minutes after cache will be clear and send new request

  // If cache not expired then get data
  if (cache && timestamp && (currentTime - timestampTime) < cacheRetrivalTime) {
    return JSON.parse(cache);
  }

  // If cache experied not get data
  return {};
};

// Local Storage'a cache'i ve zaman damgasını kaydet
export const updateLocalStorageCache = (newCache: Record<string, any>): void => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
  localStorage.setItem(TIMESTAMP_KEY, new Date().toISOString());
};