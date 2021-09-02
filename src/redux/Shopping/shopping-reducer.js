import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "The BIG cat for Children",
      description:
        "This cat will keep you busy the entire day and it is very fun to play with and also dangerous🙂",
      price: 599.0,
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80"
    },
    {
      id: 2,
      title: "ELEPHANT🐘 for pet",
      description:
        "Get a big elephant in front of your house to impress your crush👩",
      price: 999.0,
      image:
        "https://images.unsplash.com/reserve/RFDKkrvXSHqBaWMMl4W5_Heavy%20company%20by%20Alessandro%20Desantis%20-%20Downloaded%20from%20500px_jpg.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 3,
      title: "Gorilla the friend 👬",
      description:
        "Don't have any human friend! no problem. buy a gorilla. It's your ancestor which was social unlike u 🦍",
      price: 750.0,
      image:
       "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
    },
    {
      id: 4,
      title: "BUY this rear species🐼",
      description:
        "Buy pandas to prove that you are a big fan of Kung FU Panda and have no respect to the environment",
      price: 299.0,
      image:
       "https://images.unsplash.com/photo-1566487097168-e91a4f38bee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
