import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../redux/countslice";
import { decrement } from "../redux/countslice";

const Contador = () => {
  const count = useSelector((reducer) => reducer.count.Count);
  const dispatch = useDispatch();

  const handleIncremate = () => {
    dispatch(incrementCount());
  };
  const decrement1 = (e) => {
    const value = e.target.value
dispatch(decrement(value))
  }

  return (
    <div>
      <p>Contador:{count} </p>
      <button onClick={handleIncremate}>aumentar</button>
      <button onClick={decrement1}>diminuir</button>
    </div>
  );
};

export default Contador;
