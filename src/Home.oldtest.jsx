import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Little Lemon', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});
