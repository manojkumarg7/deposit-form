import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobileNO: "",
};

function acccountReducer(state = initialState, action) {
  //   if (action.type == "deposit") {
  //     return { ...state, balance: state.balance + action.payload };
  //   } else if (action.type == "withdraw") {
  //     return { ...state, balance: state.balance - action.payload };
  //   } else if (action.type == "mobileUpdate") {
  //     return { ...state, mobileNO: action.payload };
  //   } else if (action.type == "nameUpdate") {
  //     return { ...state, fullName: action.payload };
  //   } else {
  //     return state;
  //   }
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "mobileUpdate":
      return { ...state, mobileNO: action.payload };
    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function transctionReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];
    default:
      return state;
  }
}

let rootReducers = combineReducers({
  account: acccountReducer,
  transction: transctionReducer,
});
// dispatch({ type: "deposit", payload: 1000 });
// dispatch({ type: "withdraw", payload: 1000 });
// dispatch({ type: "mobileUpdate", payload: "samSung" });
// dispatch({ type: "nameUpdate", payload: "manoj" });

// const store = createStore(acccountReducer);1st
const store = createStore(rootReducers);
export default store;
// console.log(store.getState());
// store.dispatch({ type: "deposit", payload: 1000 });
// store.dispatch({ type: "nameUpdate", payload: "MAnoj" });
// console.log(store.getState());
