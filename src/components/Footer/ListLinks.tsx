import { FC } from 'react';

export interface ListLinksProps {
  title: string;
  links: string[];
}

export const ListLinks: FC<ListLinksProps> = ({ title, links }) => (
  <ul className="flex flex-col gap-3">
    <li className="pb-8 font-gilroy-500 text-xl">{title}</li>
    {links.map((link, i) => (
      <li className="text-base text-[#EEEFF4] hover:cursor-pointer" key={i}>
        {link}
      </li>
    ))}
  </ul>
);
