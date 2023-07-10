import { FC } from 'react';

import { ListLinks, ListLinksProps } from './ListLinks';

interface ListsLinksProps {
  lists: ListLinksProps[];
}

export const ListsLinks: FC<ListsLinksProps> = ({ lists }) => (
  <div className="flex gap-32 text-base">
    {lists.map(({ title, links }, i) => (
      <ListLinks key={i} title={title} links={links} />
    ))}
  </div>
);
