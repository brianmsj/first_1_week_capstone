
export const FETCH_HOUSES_REQUEST = 'FETCH_HOUSES_REQUEST';
export const fetchHousesRequest = () => ({
  type: FETCH_HOUSES_REQUEST,
})

export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const fetchHousesSuccess = (title, url, location, price, description, accomodates) => ({
  type: FETCH_HOUSES_SUCCESS,
  title,
  url,
  location,
  price,
  description,
  accomodates
})


export const fetchHouses = () => dispatch => {
    dispatch(fetchHousesRequest());
    console.log("hi");
    fetch('http://localhost:8080/houses')
    .then(response => response.json())
    .then(json => {
      console.log(json.title)
      dispatch(fetchHousesSuccess("title","url","location","price","description","accomodates"));
    })
}
