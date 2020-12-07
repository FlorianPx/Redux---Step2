import React from "react";
import { connect } from "react-redux";
import {
  addActionOne,
  addActionTen,
  removeActionOne,
  removeActionTen,
  resetAction,
} from "./counterReducer";

const mapStateToProps = (state) => ({
  counter: state.counter,
});
const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch(addActionOne)}>+ 1</button>
    <button onClick={() => dispatch(removeActionOne)}>- 1</button>
    <br />
    <button onClick={() => dispatch(addActionTen)}>+ 10</button>
    <button onClick={() => dispatch(removeActionTen)}>- 10</button>
    <br />
    <button onClick={() => dispatch(resetAction)}>Reset</button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
