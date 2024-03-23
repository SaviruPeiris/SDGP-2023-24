import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatbotCard from "../HomePage/ChatbotCard";

describe("ChatbotCard", () => {
  it("properly renders the chatbot card", () => {
    render(<ChatbotCard />);
    expect(screen.getByTestId("chatbotCard-content")).toHaveTextContent(
      "Our interactive chatbot provides personalized support and information for individuals and caregivers dealing with dementia. Whether you have questions about symptoms, caregiving tips, or need emotional support, our chatbot is available 24/7 to assist you with compassionate responses and helpful resources."
    );
  });
});
