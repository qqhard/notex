/**
 * Created by hard on 16-8-30.
 */
import * as types from '../constant/types';

const notes = (state = {}, action) => {
    switch (action.type) {
        case types.GET_NOTES_SUCCESS:
            return {
                notes: action.notes
            }
        default:
            return state
    }
}

export default notes;
