import React from "react";
import { shallow } from "enzyme";
import NotFoundRoute from "../routes/NotFoundRoute";

it("works", () => {
  const wrap = shallow(<NotFoundRoute name="note-found-route" />);
  expect(wrap.text()).not.toBeNull();
  expect(wrap.text()).toEqual("I am note-found-route");
});
