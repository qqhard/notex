/**
 * Created by hard on 16-8-31.
 */
import * as types from '../constant/types';

const user = (state = {}, action) => {
    switch (action.type) {
        case types.USER_ID:
            return {
                userId: action.userId
            }
        default:
            return state
    }
}

export default user;
