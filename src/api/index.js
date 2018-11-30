/* eslint-disable import/prefer-default-export */
const API_URL = 'http://www.recipepuppy.com/api';

const HEADERS = {
  'Content-Type': 'application/json',
};

export const makeSearchRequest = (string) =>
  fetch(`${API_URL}/?q=${string}`, {
    method: 'get',
    headers: HEADERS,
  });

