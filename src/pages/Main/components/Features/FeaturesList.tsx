import { featureList } from '@/data/data.json';
import { FeatureListItem } from '@/pages/Main/components/Features/FeatureListItem';

export const FeatureList = () => (
  <ul className="flex max-w-lg flex-col gap-12">
    {featureList.map((item) => (
      <FeatureListItem key={item.imageURL} listItem={item} />
    ))}
  </ul>
);
