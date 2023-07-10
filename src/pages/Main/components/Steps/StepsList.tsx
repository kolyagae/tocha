import { steps } from './data/data';
import { Step } from './Step';

export const StepsList = () => (
  <ul
    className={
      'mt-10 flex justify-between bg-no-repeat [&>*:nth-child(2)]:relative [&>*:nth-child(2)]:top-[4.5rem]' +
      ' bg-[url("/images/steps/lines.png")]'
    }
  >
    {steps.map((step, i) => (
      <Step key={step.title + i} step={step} />
    ))}
  </ul>
);
