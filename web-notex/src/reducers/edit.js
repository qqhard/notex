import * as types from '../constant/types';

const edit = (state = {}, action) => {
    switch (action.type) {
        case types.EDIT_TITLE:
            return {
                title: action.title,
                text: state.text
            }
        case types.EDIT_TEXT:
            return {
                text: action.text,
                title: state.title
            }
        case types.GET_NOTES_SUCCESS:
            return {
                title: action.notes[0].title,
                text: action.notes[0].text
            }
        default:
            return state
    }
}

export default edit;
