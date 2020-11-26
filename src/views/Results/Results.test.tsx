/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Info', () => {
  it('renders without crashing', () => {
    shallow(<Results />);
  });
});
