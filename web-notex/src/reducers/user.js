/**
 * Created by hard on 16-8-31.
 */
import * as types from '../constant/types';

const user = (state = {}, action) => {
    switch (action.type) {
        case types.GET_USERINFO_SUCCESS:
            return {
                userId: action.user.userId,
                username: action.user.username,
            }
        default:
            return state
    }
}

export default user;
