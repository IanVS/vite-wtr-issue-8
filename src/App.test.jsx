import React from 'react';
import { App } from './App';
import { render } from "@testing-library/react";

describe('index', () => {
  it('should render a heading', () => {
    const {getByRole} = render(<App/>);
    expect(getByRole('heading')).toBeInTheDocument();
  });
});
