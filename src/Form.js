import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, nameU } from "./Action";
import "./FormStyle.css";
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
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => {
          let data = e.target.value;
          setAmount(data);
        }}
      />
      <div className="btn-container">
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
      </div>
      <br />

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          let data = e.target.value;
          setName(data);
        }}
      />
      <div className="btn-container">
        <button
          onClick={() => {
            //   dispatch({ type: "nameUpdate", payload: name });
            dispatch(nameU(name));

            setName("");
          }}
        >
          Update
        </button>
      </div>
      <br />
      <input
        type="number"
        placeholder="Enter Number"
        value={mobile}
        onChange={(e) => {
          let data = e.target.value;
          setMobile(data);
        }}
      />
      <div className="btn-container">
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
    </div>
  );
};

export default Form;
