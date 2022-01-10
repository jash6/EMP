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
    case POST_DETAIL:
      return {...state};
    case UPDATE_DETAIL:
      return {...state};
    case DELETE_DETAIL:
      return {...state};
    default:
      return state;
  }
}

export default detailReducer;
