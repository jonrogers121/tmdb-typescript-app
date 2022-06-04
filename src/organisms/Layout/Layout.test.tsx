import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Layout } from "./Layout";

test("it renders", async () => {
  render(<Layout dataTestId="Layout" />);
  expect(screen.getByTestId('Layout')).toBeInTheDocument()
});
