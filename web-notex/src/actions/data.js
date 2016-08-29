/**
 * Created by hard on 16-8-27.
 */
import * as types from '../constant/types';
import * as urls from '../constant/urls';
import { browserHistory } from 'react-router';

export const getNotes = () => {
    return (dispatch)=> {
        $.get(urls.GET_NOTES, (data)=> {
            console.log(data);
            dispatch({
                type: types.GET_NOTES_SUCCESS,
                notes: data
            })
        }).error((e)=> {
            dispatch({
                type: types.GET_DATA_FAIL
            });
        });
    }
}