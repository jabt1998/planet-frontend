import React from "react";
import { render } from "@testing-library/react";
import PlanetForm from "./PlanetForm";

describe("PlanetForm tests", () => {
  it("should render", () => {
    expect(render(<PlanetForm />)).toBeTruthy();
  });
});
