import { render, screen } from "@testing-library/react";
import { Header } from "@common/Header";
import { MemoryRouter } from "react-router-dom";

describe('Header render correctly', () => {
  test('render Header of List page when location path is /', () => {
    render(
      <MemoryRouter initialEntries={[{pathname: '/'}]}>
        <Header/>
      </MemoryRouter>
      );
    expect(screen.getByTestId('title').textContent).toEqual('Tokens');
  })
  test('render Header of Add page when location path is /add', () => {
    render(
      <MemoryRouter initialEntries={[{pathname: '/add'}]}>
        <Header/>
      </MemoryRouter>
    );
    expect(screen.getByTestId('title').textContent).toEqual('Add Service');
  })
})