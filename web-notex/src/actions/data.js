/**
 * Created by hard on 16-8-27.
 */
import * as types from '../constant/types';
import * as urls from '../constant/urls';
import { browserHistory } from 'react-router';

export const getNotes = (userId) => {
    return (dispatch)=> {
        $.get(urls.GET_NOTES(userId), (data)=> {
            let notes = data;
            dispatch({
                type: types.GET_NOTES_SUCCESS,
                notes: notes
            })
        }).error((e)=> {
            dispatch({
                type: types.GET_DATA_FAIL
            });
        });
    }
}

export const getNote = (noteId) => {
    return (dispatch)=> {
        $.get(urls.GET_NOTE(noteId), (data)=>{
            dispatch({
                type: types.GET_NOTE_SUCCESS,
                note: data
            });
        }).error((e)=>{
            console.log(e);
            dispatch({
                type: types.GET_DATA_FAIL
            });
        });
    }
}


export const postNote = (note) => {
    return (dispatch)=> {
        $.ajax({
            url:urls.POST_NOTE,
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json",
            success: function (data) {
                dispatch({
                    type: types.POST_NOTE_SUCCESS,
                    note: data
                });
            }
        })
    }
}

export const putNote = (note, callBack = ()=>{}) => {
    note.tags = note.tags.join(',');
    return (dispatch)=> {
        $.ajax({
            url:urls.PUT_NOTE(note.noteId),
            data: JSON.stringify(note),
            type: "PUT",
            contentType: "application/json",
            success: function (data) {
                dispatch({
                    type: types.PUT_NOTE_SUCCESS,
                    note: data
                });
                callBack();
            }
        })
    }
}

export const deleteNote = (noteId) => {
    return (dispatch)=> {
        $.ajax({
            url:urls.DELETE_NOTE(noteId),
            type: "DELETE",
            success: function (data) {
                dispatch({
                    type: types.DELETE_NOTE_SUCCESS,
                    note: data
                });
            }
        })
    }
}

export const searchNote = (userId,text) => {
    return (dispatch)=> {
        $.get(urls.SEARCH_NOTE(userId, text),function (data) {
            dispatch({
                type: types.SEARCH_NOTE_SUCCESS,
                notes: data,
                query: text,
            });
        });
    }
}