import { FC } from 'react';

import { Navigation } from './Navigation';

export interface HeaderProps {
  openModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isAuth: string | null;
  setIsAuth: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Header: FC<HeaderProps> = (props) => (
  <header className="bg-lightBlueBg">
    <div className="container mx-auto">
      <Navigation {...props} />
    </div>
  </header>
);
