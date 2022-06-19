import { FormContainer } from "./Form.styles";

export const Form = ({ submitHandler,children }) => {
  return <FormContainer onSubmit={submitHandler}>{children}</FormContainer>;
};
