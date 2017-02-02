import {
  AsyncStorage,
} from 'react-native';

const Keys = {
  AuthTokens: 'ExponentAuthTokens',
};

async function getAuthTokensAsync() {
  let results = await AsyncStorage.getItem(Keys.AuthTokens);

  try {
    let authTokens = JSON.parse(results);
    return authTokens;
  } catch(e) {
    return null;
  }
}

async function saveAuthTokensAsync(authTokens) {
  return AsyncStorage.setItem(Keys.AuthTokens, JSON.stringify(authTokens));
}

async function removeAuthTokensAsync() {
  return AsyncStorage.removeItem(Keys.AuthTokens);
}

async function clearAllAsync() {
  await Promise.all(Object.values(Keys).map(k => AsyncStorage.removeItem(k)));
}

export default {
  getAuthTokensAsync,
  saveAuthTokensAsync,
  removeAuthTokensAsync,
  clearAllAsync,
};
