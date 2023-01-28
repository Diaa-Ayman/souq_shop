import { useReducer, useCallback } from 'react';

const initialState = {
  status: '',
};
const reducerFun = (state, action) => {
  if (action.type === 'PENDING') {
    return {
      status: 'sending',
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      status: 'success',
    };
  }
  if (action.type === 'ERROR') {
    return {
      status: 'error',
    };
  }

  return initialState;
};
const useHttp = () => {
  const [curState, dispatchStateAction] = useReducer(reducerFun, initialState);
  const sendRequest = useCallback(async (fetchData, getRequestData) => {
    dispatchStateAction({ type: 'PENDING' });
    try {
      const response = await fetch(fetchData.url, {
        method: fetchData.method ? fetchData.method : 'GET',
        body: fetchData.data ? JSON.stringify(fetchData.data) : null,
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error Happened');
      }

      const fetchedData = await response.json();
      if (getRequestData) {
        getRequestData(fetchedData);
      }
      dispatchStateAction({ type: 'SUCCESS' });
    } catch (error) {
      console.log(error);
      dispatchStateAction({ type: 'ERROR' });
    }
  }, []);

  return {
    status: curState,
    sendRequest: sendRequest,
  };
};

export default useHttp;
