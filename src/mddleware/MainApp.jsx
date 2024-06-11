import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux"; //s7

const MainApp = () => {
  const dispatch = useDispatch();

  let data = useSelector((state) => state?.userData);
  console.log(data);
  async function fetchData(dispatch, getState) {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let data = await res.json();
    dispatch({ type: "add", payload: data });
    // console.log(getState());
  }
  return (
    <div>
      <h1>Middle ware thunk</h1>
      <button onClick={() => dispatch(fetchData)}>Get User Details</button>
      <div> id: {data?.id}</div>
      <div> name: {data?.name}</div>
      <div> email: {data?.email}</div>
      <div> username: {data?.username}</div>
    </div>
  );
};

export default MainApp;
