import { render, screen } from "@testing-library/react";
import Login from "../routes/Login";
import Invoices from "../routes/Invoices";

test("renders /login", async () => {
  render(<Login />);
  expect(
    screen.getByRole("textbox", {
      name: /name/i,
    })
  ).toHaveValue("");
});
test("renders /invoices", async () => {
  render(<Invoices />);
  expect(
    screen.getByRole("textbox", {
      name: /item/i,
    })
  ).toHaveValue("");
});
