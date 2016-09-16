/**
 * Created by hard on 16-8-30.
 */
import * as types from '../constant/types';

const note = (state = {}, action) => {
    switch (action.type) {
        case types.GET_NOTE_SUCCESS:
            return {
                noteId: action.note.noteId,
                url: action.note.url,
                title: action.note.title,
                text: action.note.text,
                tags: action.note.tags.split(','),
                time: action.note.time,
                userId: action.note.userId,
            }
        case types.POST_NOTE_SUCCESS:
            return {
                noteId: action.note.noteId,
                url: action.note.url,
                title: action.note.title,
                text: action.note.text,
                tags: action.note.split(','),
                time: action.note.time,
                userId: action.note.userId,
            }
        case types.PUT_NOTE_SUCCESS:
            return {
                noteId: action.note.noteId,
                url: action.note.url,
                title: action.note.title,
                text: action.note.text,
                tags: action.note.tags.split(','),
                time: action.note.time,
                userId: action.note.userId,
            }
        case types.DELETE_NOTE_SUCCESS:
            return {
                noteId: action.note.noteId,
                url: action.note.url,
                title: action.note.title,
                text: action.note.text,
                tags: action.note.tags,
                time: action.note.time,
                userId: action.note.userId,
            }
        case types.GET_NOTES_SUCCESS:
            let note = action.notes[0];
            return {
                noteId: note.noteId,
                url: note.url,
                title: note.title,
                text: note.text,
                tags: note.tags.split(','),
                time: note.time,
                userId: note.userId,
            }
        case types.EDIT_TITLE:
            return {
                noteId: state.noteId,
                url: state.url,
                title: action.title,
                text: state.text,
                tags: state.tags,
                time: state.time,
                userId: state.userId,
            }
        case types.EDIT_TEXT:
            return {
                noteId: state.noteId,
                url: state.url,
                title: state.title,
                text: action.text,
                tags: state.tags,
                time: state.time,
                userId: state.userId,
            }
        case types.ADD_TAG:
            let tags = state.tags;
            tags.push(action.text);
            return {
                noteId: state.noteId,
                url: state.url,
                title: state.title,
                text: state.text,
                tags: tags,
                time: state.time,
                userId: state.userId,
            }
            break;
        case types.REMOVE_TAG:
            let tags2 = state.tags;
            console.log(tags2);
            tags2.splice(action.index, 1);
            console.log(tags2);
            return {
                noteId: state.noteId,
                url: state.url,
                title: state.title,
                text: state.text,
                tags: tags2,
                time: state.time,
                userId: state.userId,
            }
        default:
            return state
    }
}

export default note;
