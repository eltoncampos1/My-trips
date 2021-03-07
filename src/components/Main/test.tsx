import { render, screen } from '@testing-library/react';
import Main from './index';

describe('<Main />', () => {
  it('Should Render heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render colors correct', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
