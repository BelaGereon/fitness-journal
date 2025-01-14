import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiaryEntry from "./DiaryEntry";

describe("DiaryEntry Component", () => {
  const date = "01. Jan 2025";
  const entryContent = [<div>Test Entry</div>, <div>Test Entry 2</div>];

  const renderComponent = (props = {}) => {
    render(<DiaryEntry date={date} entry={[entryContent]} {...props} />);
  };

  it("renders correctly without optional props", () => {
    renderComponent();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText("Test Entry")).toBeInTheDocument();
    expect(screen.getByText("Test Entry 2")).toBeInTheDocument();
    expect(screen.queryByText("NEXT STEPS")).not.toBeInTheDocument();
    expect(screen.queryByText("NOTES")).not.toBeInTheDocument();
  });

  it("renders next steps section when provided", () => {
    const nextSteps = <div>Next Steps Content</div>;
    renderComponent({ nextSteps });
    expect(screen.getByText("NEXT STEPS")).toBeInTheDocument();
    expect(screen.getByText("Next Steps Content")).toBeInTheDocument();
  });

  it("renders notes section when provided", () => {
    const notes = <div>Notes Content</div>;
    renderComponent({ notes });
    expect(screen.getByText("NOTES")).toBeInTheDocument();
    expect(screen.getByText("Notes Content")).toBeInTheDocument();
  });

  it("renders both next steps and notes sections when provided", () => {
    const nextSteps = <div>Next Steps Content</div>;
    const notes = <div>Notes Content</div>;
    renderComponent({ nextSteps, notes });
    expect(screen.getByText("NEXT STEPS")).toBeInTheDocument();
    expect(screen.getByText("Next Steps Content")).toBeInTheDocument();
    expect(screen.getByText("NOTES")).toBeInTheDocument();
    expect(screen.getByText("Notes Content")).toBeInTheDocument();
  });

  it("does not render next steps section when provided with empty content array", () => {
    renderComponent({ nextSteps: [] });
    expect(screen.queryByText("NEXT STEPS")).not.toBeInTheDocument();
  });
});
