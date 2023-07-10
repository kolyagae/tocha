import { FC } from 'react';

import { Button } from '@/components/UI/Button/Button';

interface RateCardProps {
  rate: {
    name: string;
    description: string;
    price: number;
    period: string;
  };
}

export const RateCard: FC<RateCardProps> = ({ rate }) => {
  const { name, description, price, period } = rate;
  return (
    <li className="w-[21.875rem] list-none rounded-md bg-[#FCFEFF] drop-shadow-[0_10px_20px_rgba(0,0,0,0.07)]">
      <h3 className="flex h-[61px] items-center justify-center  bg-violet/5 font-gilroy-800 text-violet">
        {name}
      </h3>
      <div className="px-14 pb-[3.125rem]">
        <h3 className="mt-10 text-center">{description}</h3>
        <p className="mt-8 mb-[2.875rem] text-center font-gilroy-500 text-xl">
          {price}₽ / {period}
        </p>
        <Button className="bg-violet text-violet-secondary hover:bg-[#33AFE1] active:bg-[#18E1F7]">
          Подключить за {price}₽
        </Button>
      </div>
    </li>
  );
};
