const redux = require("redux");
const reduxLogger = require('redux-logger')
const applyMiddleware=redux.applyMiddleware()
const logger=reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM='BUY_ICECREAM'
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCreams:20
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams:state.numOfIceCreams-1
//     }

//     default:
//       return state;
//   }
// };


const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
     

    default:
      return state;
  }
};


const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
     
      case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams:state.numOfIceCreams-1
    }

    default:
      return state;
  }
};
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  icecream:iceReducer
})

const store = redux.createStore(rootReducer,applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
 

