import { FC } from 'react';
import { FieldErrors, Path } from 'react-hook-form';
import { RxCrossCircled } from 'react-icons/rx';

import { FormData } from './Form';

interface IFieldErrorProps {
  errors: FieldErrors<FormData>;
  label: Path<FormData>;
}

export const FieldError: FC<IFieldErrorProps> = ({ errors, label }) => {
  return (
    <div className="flex h-[18px] items-center gap-2">
      {errors[label]?.message && (
        <>
          <RxCrossCircled color="#F93232" />
          <span className="font-gilroy-400 text-xs text-[#AAAAAA]">
            {errors[label]?.message}
          </span>
        </>
      )}
    </div>
  );
};
