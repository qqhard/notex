/**
 * Created by hard on 16-8-27.
 */

const PRE = 'http://yuanbiji.com/api';
export const GET_NOTES = PRE + '/note';

export const GET_NOTE = (noteId) => PRE + '/note/'+noteId;
export const POST_NOTE = PRE + '/note/';
export const PUT_NOTE = (noteId) => PRE + '/note/'+noteId;
export const DELETE_NOTE = (noteId) => PRE + '/note/'+noteId;