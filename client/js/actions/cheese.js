

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
})

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error
})

export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());

    fetch('https://fullstack-primer.herokuapp.com/cheeses')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchCheesesSuccess(data.cheeses));
    })
    .catch(error => {
      dispatch(fetchCheesesError(error));
    })
}
