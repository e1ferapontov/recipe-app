/* eslint-disable import/prefer-default-export */
const API_URL = 'http://www.recipepuppy.com/api';

const HEADERS = {
  'Content-Type': 'application/json',
};

export const makeSearchRequest = (query, page = 1) =>
  fetch(`${API_URL}/?q=${query}&p=${page}`, {
    method: 'get',
    headers: HEADERS,
  });