import React from 'react';
import { App } from './index';

describe('index', () => {
  it('should render a heading', () => {
    const {getByRole} = render(<App/>);
    expect(getByRole('heading')).toBeInTheDocument();
  });
});
