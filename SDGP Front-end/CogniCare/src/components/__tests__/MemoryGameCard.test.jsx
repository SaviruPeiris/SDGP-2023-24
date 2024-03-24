import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MemoryGameCard from "../HomePage/MemoryGameCard";
import { MemoryRouter } from "react-router-dom";

describe("MemoryGameCard", () => {
  it("properly renders the memory game card", () => {
    render(
      <MemoryRouter>
        <MemoryGameCard />
      </MemoryRouter>
    );
    expect(screen.getByTestId("memorygame-content")).toHaveTextContent(
      "Our website features a simple memory game designed to challenge and entertain users. Players match pairs of hidden cards to test their memory and concentration skills. It's a great way to have fun while exercising the mind."
    );
  });
});
