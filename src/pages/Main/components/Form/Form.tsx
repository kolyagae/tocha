import { FC } from 'react';
import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { EmailInput } from './EmailInput';
import { FieldError } from './FieldError';
import { PasswordInput } from './PasswordInput';
import { PhoneInput } from './PhoneInput';
import { schemaSignIn, schemaSignUp } from './validationSchema';

type FormData = yup.InferType<typeof schemaSignUp>;

export interface InputProps {
  label: Path<FormData>;
  register: UseFormRegister<FormData>;
  isContainErrors: boolean;
}

interface FormProps {
  formType: string;
  closeModal: () => void;
  setIsAuth: React.Dispatch<React.SetStateAction<string | null>>;
}

const Form: FC<FormProps> = ({ formType, closeModal, setIsAuth }) => {
  const schema = formType === 'signin' ? schemaSignIn : schemaSignUp;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, password, tel } = data;

    try {
      const res = await fetch(`http://localhost:8080/${formType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, tel }),
      });
      const json = await res.json();

      if (res.ok) {
        localStorage.setItem('accessToken', json.accessToken);
        setIsAuth(json.accessToken);
        closeModal();
      } else {
        const errorName = json.toLowerCase().includes('password')
          ? 'password'
          : 'email';
        setError(errorName, {
          message: json,
        });
        throw new Error(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4 className="mb-8 text-center font-gilroy-800 text-3xl text-violet">
        {formType === 'signup' ? 'Регистрация' : 'Вход'}
      </h4>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput
          label="email"
          register={register}
          isContainErrors={!!errors.email?.message}
        />
        <FieldError label="email" errors={errors} />
        {formType === 'signup' && (
          <>
            <PhoneInput
              label="tel"
              register={register}
              isContainErrors={!!errors.tel?.message}
            />
            <FieldError label="tel" errors={errors} />
          </>
        )}
        <PasswordInput
          label="password"
          register={register}
          isContainErrors={!!errors.password?.message}
        />
        <FieldError label="password" errors={errors} />
        {formType === 'signup' && (
          <>
            <PasswordInput
              label="repeatPassword"
              register={register}
              isContainErrors={!!errors.repeatPassword?.message}
            />
            <FieldError label="repeatPassword" errors={errors} />
          </>
        )}
        <button
          className=" min-h-[48px] w-full rounded-md bg-violet px-5 py-2.5 font-gilroy-700 text-base text-white"
          type="submit"
        >
          Войти
        </button>
      </form>
    </>
  );
};

export default Form;
