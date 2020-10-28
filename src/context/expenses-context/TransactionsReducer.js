import {GET_TRANSACTIONS} from "../Types"

export default (state, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_TRANSACTIONS:
            return{
                transactions: payload
            }
        default:
            return state;
    }
};
