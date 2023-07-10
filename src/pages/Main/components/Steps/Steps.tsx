import { StepsList } from './StepsList';

const Steps = () => (
  <section
    style={{
      background: 'linear-gradient(to bottom, transparent 50%, #F2F7FF 50%)',
    }}
  >
    <div className="container mx-auto pb-48">
      <h2 className="text-center">
        Всего 3 шага для подключения Telegram чата
      </h2>
      <StepsList />
    </div>
  </section>
);

export default Steps;
