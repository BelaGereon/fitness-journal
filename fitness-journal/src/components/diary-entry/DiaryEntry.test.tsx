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

  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByText(date)).toBeInTheDocument();
  });

  it("renders entry content correctly", () => {
    renderComponent();
    expect(screen.getByText("Test Entry")).toBeInTheDocument();
    expect(screen.getByText("Test Entry 2")).toBeInTheDocument();
  });

  it("does not render next steps section if not provided", () => {
    renderComponent();
    expect(screen.queryByText("NEXT STEPS")).not.toBeInTheDocument();
  });

  it("does not render notes section if not provided", () => {
    renderComponent();
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
});
