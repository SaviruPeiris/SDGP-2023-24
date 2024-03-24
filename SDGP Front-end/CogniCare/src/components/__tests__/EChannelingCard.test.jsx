import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EChannelingCard from "../HomePage/EChannelingCard";
import { MemoryRouter } from "react-router-dom";

describe("EChannelingCard", () => {
  it("properly renders the e-channeling card", () => {
    render(
      <MemoryRouter>
        <EChannelingCard />
      </MemoryRouter>
    );
    expect(screen.getByTestId("eChannelingCard-content")).toHaveTextContent(
      "E-Channelling presents a modern solution to healthcare accessibility and convenience. Patients can easily schedule appointments online, eliminating geographical barriers and reducing waiting times. With real-time updates and reminders, patients stay informed and engaged in their care journey. Additionally, e-channelling streamlines administrative processes, allowing healthcare providers to focus more on patient care. Overall, e-channelling empowers patients, enhances efficiency, and improves the healthcare experience for all stakeholders."
    );
  });
});
