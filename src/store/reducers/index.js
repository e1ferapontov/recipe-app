import {
  API_CALL_FAILED,
  API_CALL_SUCCEEDED,
  API_CALL_REQUESTED,
} from '../actions';

const createInitialStore = () => ({
  items: null,
  pending: false,
  error: null,
});

const reducer = (state = createInitialStore(), action) => {
  switch (action.type) {
  case API_CALL_REQUESTED: {
    return {
      ...state,
      pending: true,
    };
  }

  case API_CALL_FAILED: {
    return {
      ...state,
      pending: false,
      error: action.payload.message,
    };
  }

  case API_CALL_SUCCEEDED: {
    return {
      ...state,
      pending: false,
      error: null,
      items: action.payload,
    };
  }

  default: {
    return state;
  }
  }
};

export default reducer;