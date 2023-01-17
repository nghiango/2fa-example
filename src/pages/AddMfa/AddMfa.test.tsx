import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AddMfa } from "@pages/AddMfa/AddMfa";
import { StoreProvider } from "@stores/index";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockNavigate,
}));
describe('AddMfa Component', () => {
  test('render correctly', () => {
    render(
      <StoreProvider>
          <AddMfa/>
      </StoreProvider>
    );
    expect(screen.getByTestId('label').textContent).toEqual('Enter Service Name');

    const input = screen.getByTestId('input');
    const button = screen.getByTestId('submit');
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });
});