import * as Yup from "yup";

export const authValidationSchema = Yup.object({
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Введите адрес электронной почты"),
  password: Yup.string()
    .required("Введите пароль"),
});

