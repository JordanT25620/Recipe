import FormModel from "./FormModel";

interface LoginFormModel extends FormModel{
  username: string;
  password: string;
}

export default LoginFormModel;