import { FC } from 'react';

import { InputProps } from './Form';

export const PhoneInput: FC<InputProps> = ({
  label,
  register,
  isContainErrors,
}) => (
  <input
    className={
      'rounded border-[1px] border-solid border-transparent bg-[#F7F7FD] px-5 py-2 outline-none placeholder:text-main-text  invalid:border-[#F93232] hover:border-[#E8E6F8] focus:border-[#605DEC]'
    }
    style={
      isContainErrors
        ? { borderColor: '#F93232', backgroundColor: '#FFFAFA' }
        : {}
    }
    type={label}
    placeholder="Телефон"
    {...register(label, {
      required: {
        value: true,
        message: 'Поле обязательно для заполнения',
      },
      pattern: {
        value: /[+7][(]?[0-9]{3}[)]?[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}/,
        message: 'Введите номер в формате +7(ххх)-ххх-хх-хх',
      },
      maxLength: {
        value: 15,
        message: 'Превышено допустимое количество символов',
      },
    })}
  />
);
