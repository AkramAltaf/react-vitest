import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../todo-form/todo-form";
import { describe, it, expect, vi } from "vitest";

describe("TodoForm Component", () => {
  it("renders the form correctly", () => {
    render(<TodoForm title="" setTitle={() => {}} handleSubmit={() => {}} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("calls setTitle on input change", () => {
    const setTitleMock = vi.fn();
    render(
      <TodoForm title="" setTitle={setTitleMock} handleSubmit={() => {}} />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Test Todo" },
    });
    expect(setTitleMock).toHaveBeenCalledWith("Test Todo");
  });

  it("calls handleSubmit on form submission", () => {
    const handleSubmitMock = vi.fn();
    render(
      <TodoForm
        title="Test Todo"
        setTitle={() => {}}
        handleSubmit={handleSubmitMock}
      />
    );

    fireEvent.submit(screen.getByRole("form"));
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});
