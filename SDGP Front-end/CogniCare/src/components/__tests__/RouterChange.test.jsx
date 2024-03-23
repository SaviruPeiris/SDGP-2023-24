import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import PredictionCard from "../HomePage/PredictionCard";
import EChannelingCard from "../HomePage/EChannelingCard";
import MemoryGameCard from "../HomePage/MemoryGameCard";

describe("Route Change Test", () => {
  it("should navigate to the imageUploadAwareness page after clicking the button", () => {
    render(
      <BrowserRouter>
        <PredictionCard />
      </BrowserRouter>
    );

    const button = screen.getByTestId("go-to-imageUploadAwareness-btn");

    // Simulate a user click on the button
    fireEvent.click(button);
    expect(window.location.pathname).toEqual("/imageUploadAwareness");
  });

  it("should navigate to the eChannelingPage after clicking the button", () => {
    render(
      <BrowserRouter>
        <EChannelingCard />
      </BrowserRouter>
    );

    const button = screen.getByTestId("go-to-eChannelingPage-btn");

    // Simulate a user click on the button
    fireEvent.click(button);
    expect(window.location.pathname).toEqual("/eChannelingPage");
  });

  it("should navigate to the memorygame page after clicking the button", () => {
    render(
      <BrowserRouter>
        <MemoryGameCard />
      </BrowserRouter>
    );

    const button = screen.getByTestId("go-to-memorygame-btn");

    // Simulate a user click on the button
    fireEvent.click(button);
    expect(window.location.pathname).toEqual("/memorygame");
  });
});
