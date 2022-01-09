export const GET_DETAILS = 'GET_DETAILS';
export const POST_DETAIL = 'POST_DETAILS';
export const UPDATE_DETAIL = 'UPDATE_DETAILS';
export const DELETE_DETAIL = 'DELETE_DETAILS';

const API_URL = 'http://localhost:5000/api/employee';
export const getDetails = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_DETAILS,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
