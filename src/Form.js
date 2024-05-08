import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, nameU } from "./Action";
const Form = () => {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [transctionID, setTransction] = useState(0);
  return (
    <div>
      <h1>Form Component</h1>

      <input
        type="number"
        placeholder="Ennter Amount"
        value={amount}
        onChange={(e) => {
          let data = e.target.value;
          setAmount(data);
        }}
      />
      <button
        onClick={() => {
          //   dispatch({ type: "deposit", payload: amount });
          dispatch(deposit(amount));
          setTransction(transctionID + 1);

          dispatch({
            type: "ADD",
            payload: {
              id: transctionID,
              amount: amount,
              date: new Date(),
              type: "Credit",
            },
          });
          setAmount("");
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          //   dispatch({ type: "withdraw", payload: amount });
          dispatch(withdraw(amount));
          setTransction(transctionID + 1);

          dispatch({
            type: "ADD",
            payload: {
              id: transctionID,
              amount: amount,
              date: new Date(),
              type: "Debit",
            },
          });
          setAmount("");
        }}
      >
        withdraw
      </button>
      <br />

      <input
        type="text"
        placeholder="Ennter Name"
        value={name}
        onChange={(e) => {
          let data = e.target.value;
          setName(data);
        }}
      />
      <button
        onClick={() => {
          //   dispatch({ type: "nameUpdate", payload: name });
          dispatch(nameU(name));

          setName("");
        }}
      >
        Update
      </button>
      <br />
      <input
        type="number"
        placeholder="Ennter Number"
        value={mobile}
        onChange={(e) => {
          let data = e.target.value;
          setMobile(data);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "mobileUpdate", payload: mobile });
          setMobile("");
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: mobile });
          setMobile("");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Form;
