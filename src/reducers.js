import {
 	CHANGE_SEARCHFIELD,
 	REQUEST_ROBOTS_PENDING,
 	REQUEST_ROBOTS_SUCCESS,
 	REQUEST_ROBOTS_FAIL
 	} from './constants';

const initialState = {
	searchField: ''
}

export const searchRobots = (state=initialState, action={}) =>{
	switch(action.type){
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, {searchField:action.payload});
			/*Or using object destructuring
			return { ...state, searchField: action.payload }
			*/
		default: 
			return state; //Pure func - return something
	}
}