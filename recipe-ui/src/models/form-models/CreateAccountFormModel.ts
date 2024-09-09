import FormModel from "./FormModel";

interface CreateAccountFormModel extends FormModel{
  username: string;
  password: string;
  confirmPassword: string;
}

export default CreateAccountFormModel;