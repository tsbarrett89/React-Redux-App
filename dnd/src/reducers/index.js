import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/Actions';

const initialState = {
    spells: [],
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
};

export default reducer;