import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
// 1 state
const initialState = {
  userData: {},
};

// 1.state
// 2.reducer
// 3.
// 2  reducer we can give any parameters name

// dispatch((action = { type: "add", payload: "manoj" }));
// 4s
// dispatch(fetchData());

// 2s
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return { ...state, userData: action.payload };
  }
}

// 3s  //5s applyMiddleware//6s export
const stores = createStore(userReducer, applyMiddleware(thunk));
export default stores;
