import { GET_INFO } from '../constants/action.types';

const initialState = {data: null};

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INFO:
            state.data = action.data;
            return state;
        default:
            return state;
    }
}
