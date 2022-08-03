import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    //regex ignore case
    const countValue = getByTestId(/count/i).textContent;
    expect(countValue).toEqual("0");
  });
});

describe(Counter, () => {
  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incButton = getByRole("button", { name: "Increment" });
    fireEvent.click(incButton);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual("1");
  });
});
