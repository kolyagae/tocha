import { FC, ReactNode } from 'react';

interface ButtonProp {
  className: string;
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string;
}

export const Button: FC<ButtonProp> = ({
  className,
  children,
  onClick,
  value,
}) => (
  <button
    onClick={onClick}
    value={value}
    className={
      className +
      ' h-full w-full rounded-md px-5 py-2.5 font-gilroy-700 text-base'
    }
  >
    {children}
  </button>
);
