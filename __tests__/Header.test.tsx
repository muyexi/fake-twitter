import { screen, render } from '@testing-library/react';
import { Header } from '@/components/Header';

test('header before login', () => {
  render(<Header name={undefined} />);

  const button = screen.getByRole('button', {
    name: /Log in/i,
  });
  expect(button).toBeVisible();
});

test('header after login', () => {
  const name = 'Jane Doe';
  render(<Header name={name} />);

  const textNode = screen.getByText(`Welcome, ${name}!`);
  expect(textNode).toBeVisible();

  const button = screen.getByRole('button', {
    name: /Log out/i,
  });
  expect(button).toBeVisible();
});
