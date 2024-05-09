import React from "react";
import { useSelector } from "react-redux";
import "./AccountStyle.css";
const Account = () => {
  let data = useSelector((state) => {
    console.log(state);
    return state;
  });
  return (
    <div>
      <h1>Account details</h1>
      <table>
        <tr>
          <th>Balance</th>
          <th>Mobile No</th>
          <th>UserName</th>
        </tr>
        <tbody>
          <tr>
            <td>{data.account.balance}</td>
            <td>{data.account.fullName}</td>
            <td>{data.account.mobileNO}</td>
          </tr>
        </tbody>
      </table>
      <h1>Transction Details</h1>
      {/* ----- */}
      <table>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
        <tbody>
          {data.transction.map((tr, index) => {
            return (
              <tr key={tr.id}>
                <td>{tr.id}</td>
                <td>{tr.amount}</td>
                <td>{tr.type}</td>
                <td>{tr.date.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
