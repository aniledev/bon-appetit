import React from "react";
import { shallow } from "enzyme";
import UpdateRoute from "../routes/UpdateRoute";

it("works", () => {
  const wrap = shallow(<UpdateRoute name="update-route" />);
  expect(wrap.text()).not.toBeNull();
  expect(wrap.text()).toEqual("I am update-route");
});
