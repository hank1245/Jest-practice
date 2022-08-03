import React from "react";
import NewCounter from "./NewCounter";
import { fireEvent, render, cleanup } from "@testing-library/react";

//global scope variable
let getByTestId;

beforeEach(() => {
  //component rendered in virtual dom
  const component = render(<NewCounter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  //this function is specified by default we dont have to specify this
  cleanup();
});

test("input contains initial value of 1", () => {
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("0");
});

test("input change should be reflected", () => {
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });
  expect(inputEl.value).toBe("50");
});
