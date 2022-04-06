import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PostFeed view', () => {
  render(<App />);
  const postFeed = screen.getByLabelText("main-post-feed");
  expect(postFeed).toBeInTheDocument();
});
