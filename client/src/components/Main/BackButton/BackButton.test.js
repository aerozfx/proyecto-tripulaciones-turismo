import React from "react";
import { shallow } from "enzyme";
import BackButton from "./BackButton";

describe("BackButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BackButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
