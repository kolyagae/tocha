import { FC, MouseEventHandler } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

interface EyeButtonProps {
  onClickEye: MouseEventHandler<HTMLButtonElement>;
  passwordShown: boolean;
}

export const EyeButton: FC<EyeButtonProps> = ({
  onClickEye,
  passwordShown,
}) => (
  <button className="absolute right-5 top-2" onClick={onClickEye}>
    {passwordShown ? <RiEyeLine size={24} /> : <RiEyeCloseLine size={24} />}
  </button>
);
