/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Questionaire from './Questionaire';

describe('Card', () => {
  it('renders without crashing', () => {
    shallow(<Questionaire
      type="text"
      question="What is your name?"
      liftState={()=>'oke'}
    />);
  });
});
