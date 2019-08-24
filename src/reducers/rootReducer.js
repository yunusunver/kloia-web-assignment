import { combineReducers } from "redux";

const initialState={
    first:false,
    second:false
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FIRST_ITEM':
            state={
                ...state,
                first:action.payload
            }
            break;
        case 'SECOND_ITEM':
            state={
                ...state,
                second:action.payload
            }
            break;
    }
    return state;
}

export default combineReducers({
    rootReducer:rootReducer
})