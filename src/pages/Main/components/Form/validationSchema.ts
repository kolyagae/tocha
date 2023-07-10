import * as yup from 'yup';

export const schemaSignUp = yup
  .object({
    tel: yup
      .string()
      .matches(
        /[+7][(]?[0-9]{3}[)]?[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}/,
        'Введите номер в формате: +7(ххх)-ххх-хх-хх',
      )
      .max(15, 'Превышено допустимое количество символов')
      .required('Поле обязательно для заполнения'),
    email: yup
      .string()
      .email('Неверный формат e-mail')
      .required('Поле обязательно для заполнения'),
    password: yup
      .string()
      .min(5, 'Пароль должен содержать не менее 5 символов')
      .max(15, 'Превышено допустимое количество символов')
      .required('Поле обязательно для заполнения'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Поле обязательно для заполнения'),
  })
  .required();

export const schemaSignIn = yup
  .object({
    email: yup.string().email('Неверный формат e-mail'),
    password: yup
      .string()
      .min(5, 'Пароль должен содержать не менее 5 символов')
      .max(15, 'Превышено допустимое количество символов'),
  })
  .required();
