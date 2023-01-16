import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./AddMfa.scss";
import { Input } from "./components/Input";
import { useStore } from "@stores/index";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("This field is required"),
});
interface MfaForm {
  name: string;
}
export const AddMfa = () => {
  const store = useStore();
  const navigate = useNavigate();
  const methods = useForm<MfaForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: MfaForm) => {
    store.mfaStore.add(data.name);
    navigate('/');
  };
  return (
    <FormProvider {...methods}>
      <form className="add-mfa" onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name" label="Enter Service Name" placeholder="Please enter service name"/>
        <div className="add-mfa__btn-wrapper">
          <button className="add-mfa__submit-btn" type="submit">Add</button>
        </div>
      </form>
    </FormProvider>
  );
};
