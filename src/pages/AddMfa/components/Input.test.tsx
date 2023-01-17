import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@pages/AddMfa/components/Input";

const mockRegister = jest.fn();
let errors: any = {};
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useForm: () => ({
    control: () => ({}),
    register: mockRegister,
    handleSubmit: () => jest.fn(),
    formState: {
      errors: errors
    }
  }),
}));
describe('Input component', () => {
  test('render correctly', () => {
    const data = {name: 'testing', label: 'testing label'};
    const methods = useForm();
    render(
      <FormProvider {...methods}>
        <Input name={data.name} label={data.label}/>
      </FormProvider>);

    expect(screen.getByTestId('label').textContent).toEqual(data.label);
    expect(mockRegister).toBeCalledWith(data.name);
  });
  test('error message will be shown when it has error', () => {
    const data = {name: 'testing', label: 'testing label'};
    const methods = useForm();
    errors[data.name] = { message: 'Error message' };
    render(
      <FormProvider {...methods}>
        <Input name={data.name} label={data.label}/>
      </FormProvider>);

    expect(screen.getByTestId('error').textContent).toEqual(errors[data.name].message);
  });
});