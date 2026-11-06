"use client";

import { Provider } from "react-redux";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import ReduxTodos from "./ReduxTodos";
import { store } from "./store";

export default function ReduxExamples() {
  return (
    <div id="wd-redux-examples">
      <h2>Redux</h2>
      <Provider store={store}>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <ReduxTodos />
      </Provider>
      <hr />
    </div>
  );
}