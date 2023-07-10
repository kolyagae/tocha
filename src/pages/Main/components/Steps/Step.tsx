import { FC } from 'react';

interface Step {
  step: {
    number: number;
    title: string;
    description: string;
    image: JSX.Element;
  };
}

export const Step: FC<Step> = ({ step }) => {
  const { number, title, description, image } = step;
  return (
    <li className="flex flex-col items-center">
      <div className="flex w-[15.125rem] flex-col items-center gap-4 py-4">
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-violet-secondary font-gilroy-700 text-3xl text-violet">
          {number}
        </div>
        <div className="text-center">
          <h4 className="font-gilroy-700 text-lg">{title}</h4>
          <p className="text-base">{description}</p>
        </div>
      </div>
      {image}
    </li>
  );
};
