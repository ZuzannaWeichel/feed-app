import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";


test('renders PostFeed view', () => {
  render(<App />);
  const postFeed = screen.getByLabelText("main-post-feed");
  expect(postFeed).toBeInTheDocument();
});

test('renders post input field', () => {
  render(<App />);
  
  screen.getByPlaceholderText("What's on your mind?")
  screen.getAllByText("Add Media")
  screen.getAllByText("Go Live")
  screen.getByText("Post")
});

test('makes new post', () => {
  render(<App />);
  
  userEvent.type(screen.getByPlaceholderText("What's on your mind?"), "Everything is awesome")
  userEvent.click(screen.getByText("Post"))
  screen.getByText("Everything is awesome")
});

test('increments hypes', () => {
  render(<App />);
  
  userEvent.click(screen.getByText("58"))
  screen.getByText("59")
});

test('makes new comment', () => {
  render(<App />);
  
  userEvent.click(screen.getByLabelText("add-comment-1"))
  userEvent.type(screen.getByPlaceholderText("Comment goes here"), "Making a new comment")
  userEvent.click(screen.getByLabelText("post-comment-1"))

  screen.getByText("Making a new comment")
});