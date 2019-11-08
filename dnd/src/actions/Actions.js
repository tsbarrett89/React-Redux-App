import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/')
        .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data.results }))
        .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response}))
};