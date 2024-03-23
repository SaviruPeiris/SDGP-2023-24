import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import VisionMission from "../HomePage/VisionMission";
describe("VisionMission", () => {
  it("properly renders the vision", () => {
    render(<VisionMission />);
    expect(screen.getByTestId("vision-content")).toHaveTextContent(
      "Empowering those affected by dementia with understanding, support, and hope through an enriching online platform."
    );
  });

  it("properly renders the mission", () => {
    render(<VisionMission />);
    expect(screen.getByTestId("mission-content")).toHaveTextContent(
      "To empower individuals living with dementia and their caregivers through comprehensive resources and support, fostering dignity and independence."
    );
  });
});
