import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiaryEntry from "./DiaryEntry";

describe("DiaryEntry Component", () => {
  const date = "01. Jan 2025";

  it("renders without crashing", () => {
    render(
      <DiaryEntry date={date}>
        <div>Child content</div>
      </DiaryEntry>
    );

    expect(screen.getByText("01. Jan 2025")).toBeInTheDocument();
  });
});
