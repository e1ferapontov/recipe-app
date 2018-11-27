export const API_CALL_REQUESTED = 'API_CALL_REQ';
export const API_CALL_FAILED = 'API_CALL_FAIL';
export const API_CALL_SUCCEEDED = 'API_CALL_SUCCESS';

export const makeSearchReq = (query) => ({
  type: API_CALL_REQUESTED,
  payload: query,
});

export const searchFailed = (errorMsg) => ({
  type: API_CALL_FAILED,
  error: true,
  payload: new Error(errorMsg),
});

export const searchSucceded = (items) => ({
  type: API_CALL_SUCCEEDED,
  payload: items,
});
