const productReducerDeafaultState=[];

export default (state=productReducerDeafaultState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
        return [
            ...state,
            action.product
        ];
        case 'REMOVE_PRODUCT':

        case 'EDIT_PRODUCT':

        case 'GET_PRODUCTLIST':
            
        default:
            return state;
    }
};