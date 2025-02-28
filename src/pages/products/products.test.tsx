import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { IProducts } from "../../@types/products";
import Products from "./products";

vi.mock("../../components/product-card/product-card", () => ({
  default: ({ product }: { product: IProducts }) => (
    <div data-testid="product-card">{product.title}</div>
  ),
}));

const mockProducts: IProducts[] = [
  {
    id: 1,
    title: "Test Product 1",
    price: 29.99,
    description: "Description 1",
    category: "Category 1",
    image: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 49.99,
    description: "Description 2",
    category: "Category 2",
    image: "https://example.com/image2.jpg",
  },
];

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    })
  )
);

describe("Products Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the Products component", async () => {
    render(<Products />);

    expect(screen.getByText("Products")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getAllByTestId("product-card")).toHaveLength(2);
    });

    expect(screen.getByText("Test Product 1")).toBeInTheDocument();
    expect(screen.getByText("Test Product 2")).toBeInTheDocument();
  });

  test("fetches and displays products", async () => {
    render(<Products />);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");

    await waitFor(() => {
      expect(screen.getAllByTestId("product-card")).toHaveLength(2);
    });
  });
});
