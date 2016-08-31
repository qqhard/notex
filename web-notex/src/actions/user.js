/**
 * Created by hard on 16-8-31.
 */
import * as types from '../constant/types';
import * as urls from '../constant/urls';



export const getUser = () => {
    return (dispatch)=> {
        $.get(urls.USER_INFO, (data)=> {
            dispatch({
                type: types.GET_USERINFO_SUCCESS,
                user: data
            })
        }).error((e)=> {
            dispatch({
                type: types.GET_DATA_FAIL
            });
        });
    }
}
