import { FC, MouseEventHandler, useState } from 'react';

import { EyeButton } from './EyeButton';
import { InputProps } from './Form';

export const PasswordInput: FC<InputProps> = ({
  isContainErrors,
  register,
  label,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="relative rounded bg-[#F7F7FD]">
      <input
        className="w-full rounded border-[1px] border-solid border-transparent bg-inherit py-2 pl-5 pr-14 outline-none placeholder:text-main-text hover:border-[#E8E6F8] focus:border-[#605DEC]"
        type={passwordShown ? 'text' : 'password'}
        placeholder={label === 'password' ? 'Пароль' : 'Повторите пароль'}
        // {...register(label, {
        //   required: {
        //     value: true,
        //     message: 'Поле обязательно для заполнения',
        //   },
        //   maxLength: {
        //     value: 15,
        //     message: 'Превышено допустимое количество символов',
        //   },
        //   minLength: {
        //     value: 5,
        //     message: 'Пароль должен содержать не менее 5 символов',
        //   },
        // })}
        {...register(label)}
        style={
          isContainErrors
            ? { borderColor: '#F93232', backgroundColor: '#FFFAFA' }
            : {}
        }
      />
      <EyeButton
        onClickEye={togglePasswordShown}
        passwordShown={passwordShown}
      />
    </div>
  );
};
