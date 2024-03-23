import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomeTopContent from "../HomePage/HomeTopContent";

describe("ErrorMessage", () => {
  it("properly renders the welcome message", () => {
    render(<HomeTopContent />);
    expect(screen.getByTestId("welcome-message")).toHaveTextContent(
      "Welcome to CogniCare+"
    );
  });
});
