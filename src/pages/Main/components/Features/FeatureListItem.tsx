import { FC } from 'react';

interface FeatureListItemProps {
  listItem: {
    imageURL: string;
    title: string;
    description: string;
  };
}

export const FeatureListItem: FC<FeatureListItemProps> = ({ listItem }) => {
  const { imageURL, title, description } = listItem;
  return (
    <li className="flex gap-6">
      <img
        className="h-[68px] w-[68px]"
        src={imageURL}
        alt="Feature illustration"
      />
      <div>
        <h3 className=" font-gilroy-600 text-2xl">{title}</h3>
        <p className=" text-base font-normal">{description}</p>
      </div>
    </li>
  );
};
