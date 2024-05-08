import React from "react";
import { useSelector } from "react-redux";
const Account = () => {
  let data = useSelector((state) => {
    console.log(state);
    return state;
  });
  return (
    <div>
      <h1>Account details</h1>
      <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Balance
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Mobile No
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              UserName
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {data.account.balance}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {data.account.fullName}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {data.account.mobileNO}
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Transction Details</h1>
      <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Amount
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.transction.map((tr, index) => {
            return (
              <tr key={tr.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {tr.id}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {tr.amount}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {tr.type}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {tr.date.toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
