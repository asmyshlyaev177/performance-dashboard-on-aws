import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ColumnChartWidget from "../ColumnChartWidget";

test("renders the chart title", async () => {
  render(
    <ColumnChartWidget
      title="test title"
      downloadTitle="test title"
      summary="test summary"
      columns={["test"]}
      data={[{ test: 1 }]}
      summaryBelow={false}
      columnsMetadata={[]}
      significantDigitLabels={false}
    />,
    { wrapper: MemoryRouter }
  );
  expect(screen.getByText("test title")).toBeInTheDocument();
});

test("renders chart summary above the chart", async () => {
  render(
    <ColumnChartWidget
      title="test title"
      downloadTitle="test title"
      summary="test summary"
      columns={["test"]}
      data={[{ test: 1 }]}
      summaryBelow={false}
      columnsMetadata={[]}
      significantDigitLabels={false}
    />,
    { wrapper: MemoryRouter }
  );

  const summary = screen.getByText("test summary");
  expect(summary).toBeInTheDocument();
  expect(summary.closest("div")).toHaveClass("chartSummaryAbove");
});

test("renders chart summary below the chart", async () => {
  render(
    <ColumnChartWidget
      title="test title"
      downloadTitle="test title"
      summary="test summary"
      columns={["test"]}
      data={[{ test: 1 }]}
      summaryBelow={true}
      columnsMetadata={[]}
      significantDigitLabels={false}
    />,
    { wrapper: MemoryRouter }
  );

  const summary = screen.getByText("test summary");
  expect(summary).toBeInTheDocument();
  expect(summary.closest("div")).toHaveClass("chartSummaryBelow");
});