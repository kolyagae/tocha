import { RatesList } from './RatesList';

const Rates = () => (
  <section className="pt-20 pb-24" id="rates">
    <div className="container mx-auto">
      <h2 className="text-center">Тарифы</h2>
      <h3 className="mt-4 text-center">Стоимость зависит от трафика сайта</h3>
      <RatesList />
    </div>
  </section>
);

export default Rates;
