import { PUPPY_LIST_REQUEST, PUPPY_LIST_SUCCESS, PUPPY_LIST_FAIL, PUPPY_DETAILS_REQUEST, PUPPY_DETAILS_SUCCESS, PUPPY_DETAILS_FAIL, PUPPY_SAVE_REQUEST, PUPPY_SAVE_SUCCESS, PUPPY_SAVE_FAIL, PUPPY_DELETE_REQUEST, PUPPY_DELETE_SUCCESS, PUPPY_DELETE_FAIL } from "../constants/puppyConstants";

const puppyListReducer = (state = { puppies: [] }, action) => {

  switch (action.type) {
    case PUPPY_LIST_REQUEST:
      return { loading: true, puppy: [] };
    case PUPPY_LIST_SUCCESS:
      return { loading: false, puppies: action.payload };
    case PUPPY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

const puppyDetailsReducer = (state = { puppy: {} }, action) => {

  switch (action.type) {
    case PUPPY_DETAILS_REQUEST:
      return { loading: true };
    case PUPPY_DETAILS_SUCCESS:
      return { loading: false, puppy: action.payload };
    case PUPPY_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

const puppyDeleteReducer = (state = { puppy: {} }, action) => {

  switch (action.type) {
    case PUPPY_DELETE_REQUEST:
      return { loading: true };
    case PUPPY_DELETE_SUCCESS:
      return { loading: false, puppy: action.payload, success: true };
    case PUPPY_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

const puppySaveReducer = (state = { puppy: {} }, action) => {

  switch (action.type) {
    case PUPPY_SAVE_REQUEST:
      return { loading: true };
    case PUPPY_SAVE_SUCCESS:
      return { loading: false, success: true, puppy: action.payload };
    case PUPPY_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

export { puppyListReducer, puppyDetailsReducer, puppySaveReducer, puppyDeleteReducer }