import { FC, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Button } from '../UI/Button/Button';
import { HeaderProps } from './Header';

type NavigationProps = HeaderProps;

export const Navigation: FC<NavigationProps> = ({
  openModal,
  isAuth,
  setIsAuth,
}) => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const hash = event.currentTarget.hash.slice(1);
    setActiveLink(hash);
  };

  const handleSignOut = () => {
    setIsAuth('');
    setActiveLink('');
  };

  return (
    <nav className="flex items-center justify-between pt-8">
      <div className="flex">
        <img src="/images/header/header_logo.png" alt="Logo" />
        <h3>tocha</h3>
      </div>
      {isAuth ? (
        <div className="flex w-[540px] items-center justify-between font-gilroy-400 text-xl">
          <AnchorLink
            className={
              activeLink === 'about' ? 'font-gilroy-700 text-violet' : ''
            }
            href="#about"
            onClick={handleNavLinkClick}
          >
            Подключение
          </AnchorLink>
          <AnchorLink
            onClick={handleNavLinkClick}
            className={
              activeLink === 'rates' ? 'font-gilroy-700 text-violet' : ''
            }
            href="#rates"
          >
            Оплата
          </AnchorLink>
          <AnchorLink
            onClick={handleNavLinkClick}
            className={
              activeLink === 'footer' ? 'font-gilroy-700 text-violet' : ''
            }
            href="#footer"
          >
            Контакты
          </AnchorLink>
          <button onClick={handleSignOut}>Выход</button>
        </div>
      ) : (
        <div className="flex gap-3">
          <Button
            className="bg-violet-secondary text-violet hover:bg-[#C39BFB] active:bg-violet active:text-white"
            onClick={openModal}
            value="signin"
          >
            Вход
          </Button>
          <Button
            className="bg-violet text-violet-secondary hover:bg-[#33AFE1] active:bg-[#18E1F7]"
            onClick={openModal}
            value="signup"
          >
            Регистрация
          </Button>
        </div>
      )}
    </nav>
  );
};
