export const addActionOne = {
  type: "ADD",
};
export const removeActionOne = {
  type: "REMOVE",
};
export const addActionTen = {
  type: "ADD_TEN",
};
export const removeActionTen = {
  type: "REMOVE_TEN",
};
export const resetAction = {
  type: "RESET",
};

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      return { counter: state.counter + 1 };
    case "REMOVE":
      return { counter: state.counter - 1 };
    case "ADD_TEN":
      return { counter: state.counter + 10 };
    case "REMOVE_TEN":
      return { counter: state.counter - 10 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};

export default counterReducer;
