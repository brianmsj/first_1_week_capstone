import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR,
} from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
  switch (action.type){

    case FETCH_CHEESES_REQUEST:
      return Object.assign({}, state, {loading: true});

    case FETCH_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        loading: false,
        cheeses: action.cheeses
      });

    case FETCH_CHEESES_ERROR:
      return Object.assign({}, state, {loading: false, error: action.error});

    default:
      return state;
  }
}
