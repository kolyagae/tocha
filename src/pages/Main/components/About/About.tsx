import { Button } from '../../../../components/UI/Button/Button';

const About = () => (
  <section className="bg-lightBlueBg" id="about">
    <div className="container relative mx-auto flex pt-24 pb-32">
      <div>
        <h1 className="first-line:text-violet">
          Telegram чат <br />
          на вашем сайте
        </h1>
        <h3 className="w-[484px] pt-6 pb-8">
          Общение с клиентами станет простым <br />
          и удобным, а подключение займет 5 минут. <br />
          Первый месяц —
          <span className="font-bold text-violet"> бесплатно!</span>
        </h3>
        <div className="w-[10.5rem]">
          <Button className="bg-violet text-violet-secondary hover:bg-[#33AFE1] active:bg-[#18E1F7]">
            Подключить
          </Button>
          <img
            className="pointer-events-none absolute top-[23rem] left-[6rem] blur-[50px]"
            role="presentation"
            src="/images/about/button_shadow.png"
            alt=""
          />
        </div>
      </div>
      <img
        className="absolute left-[46rem] top-[4.5rem] blur-[50px]"
        role="presentation"
        src="/images/about/top_shadow_illustration.png"
        alt=""
      />
      <img
        className="relative left-[-105px] z-[2]"
        src="/images/about/illustration.png"
        alt="App illustration"
      />
      <img
        className="absolute top-[17.5rem] left-[60rem] blur-[50px]"
        role="presentation"
        src="/images/about/right_shadow_illustration.png"
        alt=""
      />
    </div>
  </section>
);

export default About;
