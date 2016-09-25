/**
 * Created by hard on 16-8-31.
 */
import * as types from '../constant/types';

const query = (state = {}, action) => {
    switch (action.type) {
        case types.SEARCH_NOTE_SUCCESS:
            return {
                query: action.query,
            }
        default:
            return state
    }
}

export default query;
