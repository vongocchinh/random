import * as types from "./../../constant/home";

var initialState = JSON.parse(localStorage.getItem("input"))
  ? JSON.parse(localStorage.getItem("input"))
  : {
      arr: ["Apple", "Samsung", "Iphone", "Nokia"],
      data: "",
      rules: false,
    };
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.HandleInput:
      var arr = actions.data.trim().split("\n");
      var rand = 0;
      rand = arr[Math.floor(Math.random() * arr.length)];
      state = {
        arr: arr,
        data: rand,
        rules: true,
      };
      localStorage.setItem("input", JSON.stringify(state));
      return state;
    case types.HandleDelete:
      const ind = findIndex(state.arr, state.data);
      if (ind !== -1) {
        state.arr.splice(ind, 1);
      }
      state = {
        arr: state.arr,
        data: "",
        rules: false,
      };
      localStorage.setItem("input", JSON.stringify(state));
      return state;
    case types.HandleDeleteData:
      state = {
        arr: state.arr,
        data: "",
        rules: false,
      };
      localStorage.setItem("input", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
const findIndex = (arr, index) => {
  var a = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      a = i;
      break;
    }
  }
  return a;
};
export default myReducer;
