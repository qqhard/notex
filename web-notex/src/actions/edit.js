import * as types from '../constant/types';


export const editTitle = (title) => {
	return (dispatch)=>{
		dispatch({
			type: types.EDIT_TITLE,
			title: title,
		});
	}
}

export const editText = (text) => {
	return (dispatch)=>{
		dispatch({
			type: types.EDIT_TEXT,
			text: text,
		});
	}
}

export const addTag = (text) => {
	return (dispatch)=>{
		dispatch({
			type: types.ADD_TAG,
			text: text,
		});
	}
}

export const removeTag = (index) => {
	return (dispatch)=>{
		dispatch({
			type: types.REMOVE_TAG,
			index: index,
		});
	}
}