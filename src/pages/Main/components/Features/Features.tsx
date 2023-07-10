import { FeatureList } from './FeaturesList';

const Feature = () => (
  <section className="bg-lightBlueBg" id="feature">
    <div className="container mx-auto flex gap-20 pb-20">
      <div>
        <h2 className="mb-16">Tocha Online — это</h2>
        <FeatureList />
      </div>
      <img src="/images/features/phone.png" alt="Phone illustration" />
    </div>
  </section>
);

export default Feature;
