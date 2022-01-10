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

export const postDetail = (name, lname, email) => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          First_Name: name,
          Last_Name: lname,
          Email: email,
        }),
      });
      const json = await result.json();
      console.log(json);
      if (json) {
        dispatch({
          type: POST_DETAIL,
          payload: json,
        });
      } else {
        console.log('Unable to Post!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateDetail = (name, lname, email) => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          First_Name: name,
          Last_Name: lname,
          Email: email,
        }),
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: UPDATE_DETAIL,
          payload: json,
        });
      } else {
        console.log('Unable to Update!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteDetail = email => {
  try {
    return async dispatch => {
      const result = await fetch(
        `http://localhost:5000/api/employee/${email}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await result.json();
      if (json) {
        dispatch({
          type: DELETE_DETAIL,
          payload: json,
        });
      } else {
        console.log('Unable to Delete!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
