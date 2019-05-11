import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });
// from Jest takes 2 args. 1st id description of test bundle. 2nd is the testing function
describe("<NavigationItems />", () => {
  it("should render two <NavigationItem /> elements if noth authenticated.", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});