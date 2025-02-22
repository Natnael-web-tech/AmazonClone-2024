import { Type } from "./action.type";


 const initialState = {
  basket: [],
};

export  {initialState};


 const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
 
export default reducer;