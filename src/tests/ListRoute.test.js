import React from "react";
import { shallow } from "enzyme";
import ListRoute from "../routes/ListRoute";

it("works", () => {
  const wrap = shallow(<ListRoute name="list-route" />);
  expect(wrap.text()).not.toBeNull();
  expect(wrap.text()).toEqual("I am list-route");
});
