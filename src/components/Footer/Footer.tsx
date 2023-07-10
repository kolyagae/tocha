import { footerLinks } from '@/data/data.json';

import { Copyright } from './Copyright';
import { ListsLinks } from './ListsLinks';
import { Logo } from './Logo';

export const Footer = () => (
  <footer className="container mx-auto" id="footer">
    <div className="flex items-start justify-between bg-[#1D2530] px-40 pb-20 pt-28 text-[#F4F5F7]">
      <Logo />
      <ListsLinks lists={footerLinks} />
    </div>
    <Copyright />
  </footer>
);
