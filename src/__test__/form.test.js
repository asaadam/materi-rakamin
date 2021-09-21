import { FormLogin } from "../component/form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
test("Submit form correctly", () => {
  let submitedData;
  const handleSubmit = (data) => (submitedData = data);
  render(<FormLogin onSubmit={handleSubmit} />);
  const username = "kominfo";
  const password = "password";

  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(
    screen.getByRole("button", {
      name: /submit/i,
    })
  );
  expect(submitedData).toEqual({ username, password });
});
