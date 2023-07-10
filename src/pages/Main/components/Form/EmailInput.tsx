import { FC } from 'react';

import { InputProps } from './Form';

export const EmailInput: FC<InputProps> = ({
  isContainErrors,
  register,
  label,
}) => (
  <input
    className="rounded border-[1px] border-solid border-transparent bg-[#F7F7FD] px-5 py-2 outline-none placeholder:text-main-text hover:border-[#E8E6F8] focus:border-[#605DEC]"
    style={
      isContainErrors
        ? { borderColor: '#F93232', backgroundColor: '#FFFAFA' }
        : {}
    }
    type={label}
    placeholder="Электронная почта"
    {...register(label, {
      required: {
        value: true,
        message: 'Поле обязательно для заполнения',
      },
    })}
  />
);
