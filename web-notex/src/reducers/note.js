/**
 * Created by hard on 16-8-30.
 */
import * as types from '../constant/types';

const note = (state = {}, action) => {
    switch (action.type) {
        case types.GET_NOTE_SUCCESS:
            return {
                note: action.note
            }
        case types.POST_NOTE_SUCCESS:
            return {
                note: action.note
            }
        case types.PUT_NOTE_SUCCESS:
            return {
                note: action.note
            }
        case types.DELETE_NOTE_SUCCESS:
            return {
                note: action.note
            }
        default:
            return state
    }
}

export default note;
