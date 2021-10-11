import { render, screen } from '@testing-library/react';
import { Chart } from 'react-chartjs-2';
import App from './App';
import CovidTracker from './CovidTracker';
import Form from './Form';
import Navbar from './Navbar';
import Search from './Search';
import Storage from './Storage';

test('renders heading of application', () => {
  render(<App />);
  const linkElement = screen.getByText(/Covid/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders navigation', () => {
//   render(<Navbar />);
//   const linkElement = screen.getByText(/Home/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders covid data', () => {
  render(<CovidTracker />);
  const text = screen.getByTitle(/covid/i);
  expect(text).toBeInTheDocument();
});

test('renders search table', () => {
  render(<Search />);
  const text = screen.getByTitle(/search-table/i);
  expect(text).toBeInTheDocument();
});

test('renders local storage', () => {
  render(<Storage />);
  const text = screen.getByTitle(/local-storage/i);
  expect(text).toBeInTheDocument();
});


it('check input field',()=>{
  const {queryByTitle} = render(<App />);
  const input = queryByTitle("container");
  expect(input).toBeTruthy();
})