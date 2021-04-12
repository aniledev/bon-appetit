import React from "react";
import { shallow } from "enzyme";
import LandingRoute from "../routes/LandingRoute";

it("works", () => {
  const wrap = shallow(<LandingRoute name="Elina" />);
  expect(wrap.text()).not.toBeNull();
  expect(wrap.text()).toEqual("I am Elina");
});
