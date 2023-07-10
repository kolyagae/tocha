import { Form } from './Form';

const Connection = () => (
  <section>
    <div className="container mx-auto py-[90px]">
      <div
        className="flex justify-center gap-20 pt-4"
        style={{
          background:
            'linear-gradient(27deg, rgb(104, 94, 214) 51%, rgb(127, 118, 220) 49%)',
        }}
      >
        <img src="/images/connection/illustration.png" alt="illustration" />
        <div className="max-w-[430px] pt-8 ">
          <h2 className="font-gilroy-800 text-3xl text-white">
            Подключите Telegram чат уже сегодня
          </h2>
          <Form />
        </div>
      </div>
    </div>
  </section>
);

export default Connection;
