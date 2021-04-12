import React from "react";
import { shallow } from "enzyme";
import RestaurantRoute from "../routes/RestaurantRoute";

it("works", () => {
  const wrap = shallow(<RestaurantRoute name="restaurant-route" />);
  expect(wrap.text()).not.toBeNull();
  expect(wrap.text()).toEqual("I am restaurant-route");
});
