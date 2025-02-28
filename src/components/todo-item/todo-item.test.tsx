import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoItem from "./todo-item";

describe("TodoItem Component", () => {
  it("renders the todo item correctly", () => {
    render(<TodoItem title="Buy Milk" />);
    expect(screen.getByText("Buy Milk")).toBeInTheDocument();
  });
});
