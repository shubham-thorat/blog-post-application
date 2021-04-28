import { FETCH_ALL } from "./PostDataType";

const initialState = []

const DataReducer = (state = initialState ,action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload    
        default:
            return state
    }
}
export default DataReducer