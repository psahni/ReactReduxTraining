const INITIAL_STATE = { fullname: '',
email: '',
success: false
};

export  default
function checkoutReducer(state=INITIAL_STATE, action) {

switch(action.type) {
case "ORDER_DATA": 
return Object.assign({}, action.payload.order)

case "ORDER_SUCCESS":
return  Object.assign({}, state, {success: true})

default:
return state;
}

}