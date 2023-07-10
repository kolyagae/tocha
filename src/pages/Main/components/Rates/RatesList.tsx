import { rates } from '@/data/data.json';

import { RateCard } from './RateCard';

export const RatesList = () => (
  <ul className="mt-10 flex gap-7">
    {rates.map((rate) => (
      <RateCard key={rate.name} rate={rate} />
    ))}
  </ul>
);
