import { render, screen } from '@testing-library/react';
import Map from './index';

describe('<Map />', () => {
  it('Should render whitout any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument();
  });
  // it('Should render with the marker in correct place', () => {});
});
