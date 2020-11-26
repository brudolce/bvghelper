/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CoolButton from './CoolButton';

describe('CoolButton', () => {
  it('renders without crashing', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const oke = (): void => {};
    shallow(
      <CoolButton size={2} onClick={oke}>
        test
      </CoolButton>
    );
  });
});
