// @flow
import * as React from 'react';
import {shallow} from 'enzyme';
import {PointsOverviewContent} from '../';

test('Component renders', assert => {
  const wrapper = shallow(<PointsOverviewContent />);

  expect(wrapper.find('div').length).toEqual(1);
});
