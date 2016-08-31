/**
 * Created by hard on 16-8-31.
 */
import * as types from '../constant/types';


export const setUserId = (userId) => {
    return (dispatch)=>{
        dispatch({
            type: types.USER_ID,
            userId: userId,
        });
    }
}
