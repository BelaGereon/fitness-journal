import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiaryEntry from "./DiaryEntry";

describe("DiaryEntry Component", () => {
  it("renders without crashing", () => {
    render(<DiaryEntry date="01. Jan 2025"></DiaryEntry>);

    expect(screen.getByText("01. Jan 2025")).toBeInTheDocument();
  });
});
