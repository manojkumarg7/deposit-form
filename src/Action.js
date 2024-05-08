import React from "react";
export function deposit(amount) {
  return {
    type: "deposit",
    payload: amount,
  };
}
export function withdraw(amount) {
  return {
    type: "withdraw",
    payload: amount,
  };
}
export function nameU(name) {
  return {
    type: "nameUpdate",
    payload: name,
  };
}
export function numberU(mobile) {
  return {
    type: "mobileUpdate",
    payload: mobile,
  };
}
