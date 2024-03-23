import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PredictionCard from "../HomePage/PredictionCard";
import { MemoryRouter } from "react-router-dom";

describe("PredictionCard", () => {
  it("properly renders the prediction card", () => {
    render(
      <MemoryRouter>
        <PredictionCard />
      </MemoryRouter>
    );
    expect(screen.getByTestId("predictionCard-content")).toHaveTextContent(
      "Our dementia prediction component utilizes advanced machine learning algorithms to analyze MRI scans of the brain and assess the risk of dementia. By leveraging cutting-edge technology, we provide early detection and personalized risk assessments, enabling proactive healthcare decisions and interventions for individuals at risk of developing dementia."
    );
  });
});
