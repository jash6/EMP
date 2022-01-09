import {
  GET_DETAILS,
  POST_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
} from './actions';

const initalState = {
  details: [],
};

function detailReducer(state = initalState, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {...state, details: action.payload};
    default:
      return state;
  }
}

export default detailReducer;
