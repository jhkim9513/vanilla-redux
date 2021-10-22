import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer는 data를 수정하는 일을 한다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
  // reducer가 return하는 값이 state의 값이 된다.
  return count;
};
// store는 기본적으로 data를 넣을 수 있는 장소
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// store를 구독하면 변화가있을 때 마다 함수를 실행한다. 지금같은 경우는 onChange함수
countStore.subscribe(onChange);

// dispatch가 action을 파라미터로 reducer를 부른다.
// action은 object여야함
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", () => handleMinus());
