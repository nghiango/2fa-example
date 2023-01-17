import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AddMfa } from "@pages/AddMfa/AddMfa";
import { StoreProvider } from "@stores/index";
import { mfaStore } from "@stores/mfaStore";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));
describe('AddMfa Component', () => {
  test('submit will add a new mfa and navigate to /', async () => {
    render(
      <StoreProvider>
          <AddMfa/>
      </StoreProvider>
    );
    expect(screen.getByTestId('label').textContent).toEqual('Enter Service Name');

    const input = screen.getByTestId('input');
    const button = screen.getByTestId('submit');
    fireEvent.change(input, {
      target: {
        value: 'testing'
      }
    });
    const currentAmountMfa = mfaStore.mfas.length;
    fireEvent.click(button);
    await waitFor(async () => {
      expect(mfaStore.mfas.length).toEqual(currentAmountMfa + 1);
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(mockNavigate).toBeCalledWith('/');
    })
  });
});