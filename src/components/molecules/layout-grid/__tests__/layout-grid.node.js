// @flow
import * as React from 'react';
import {shallow} from 'enzyme';
import {LayoutGrid} from '../';

test('Component renders', assert => {
  const wrapper = shallow(<LayoutGrid />);

  expect(wrapper.find('div').length).toEqual(1);
});
