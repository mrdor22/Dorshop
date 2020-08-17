// import { cartItem} from '../app/Classes/cartItem';

import { Product } from './Classes/product';


// export function Reducer(state = { itemsInCart : 0}, action) {
//   switch(action.type)
// {
//   case "addItem" :
//     return { count : state.itemsInCart + 1
//     }

//     case "removeItem" :
//       return { count : state.itemsInCart  -  1}

//       default:
//         return state;
// }
// }



// export function Reducer(state = { mycount : 0 }, action)
// {
//     switch(action.type)
//     {
//         case "addITEM" :

//             return { mycount : state.mycount + 1}

//         case "subITEM":
//             return { mycount : state.mycount - 1}

//         default:
//             return state;
//     }
// }

import { CartActionTypes, CartActions } from "../app/store/actions";

export let initialState = [];

export function reducer(state=initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return [...state,  action.payload]
        case CartActionTypes.REMOVE_PRODUCT:
            let product = action.payload
            return state.filter((el)=>el.id != product.id)
        default:
            return state
    }
}
