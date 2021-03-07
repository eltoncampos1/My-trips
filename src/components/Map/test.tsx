import { render, screen } from '@testing-library/react';
import Map from './index';

describe('<Map />', () => {
  it('Should render whitout any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument();
  });
  it('Should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'São Paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placetwo = {
      id: '2',
      name: 'Rio de Janeiro',
      slug: 'Rio de Janeiro',
      location: {
        latitude: 1,
        longitude: 1
      }
    };

    render(<Map places={[place, placetwo]} />);

    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Rio de Janeiro/i)).toBeInTheDocument();
  });
});
