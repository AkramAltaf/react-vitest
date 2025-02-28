import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./todo-list";

describe("TodoList Component", () => {
  it("renders the TodoList correctly", () => {
    render(<TodoList />);
    expect(screen.getByText(/add a todo/i)).toBeInTheDocument();
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Learn Vitest" } });
    fireEvent.click(button);

    expect(screen.getByText("Learn Vitest")).toBeInTheDocument();
  });

  it("clears input after adding a todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
