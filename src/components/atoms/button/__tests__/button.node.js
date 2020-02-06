// @flow
import * as React from 'react';
import {shallow} from 'enzyme';
import { Button } from '../';

test('Component renders', assert => {
  const wrapper = shallow(<Button />);

  expect(wrapper.find('div').length).toEqual(1);
});
