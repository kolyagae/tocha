import { FC } from 'react';

interface ReviewSlideProps {
  title: string;
  text: string;
  client: {
    photo: string;
    firstName: string;
    lastName: string;
    company: string;
  };
}

export const ReviewSlide: FC<ReviewSlideProps> = (props) => {
  const {
    title,
    text,
    client: { photo, firstName, lastName, company },
  } = props;

  return (
    <>
      <div>
        <div
          className="h-[232px] w-[540px] bg-white px-8 pt-8 text-center"
          style={{
            clipPath:
              'polygon(6px 0px, 6px 0px, 5.02676847px 0.07852982px, 4.10353536px 0.30588376px, 3.24265389px 0.66970854px, 2.45647728px 1.15765088px, 1.75735875px 1.7573575px, 1.15765152px 2.45647512px, 0.66970881px 3.24265046px, 0.30588384px 4.10353024px, 0.07852983px 5.02676118px, 9.9333241925913E-32px 5.99999px, 0px 214px, 0px 214px, 0.07853039px 214.973302px, 0.30588592px 215.896576px, 0.66971313px 216.757474px, 1.15765856px 217.543648px, 1.75736875px 218.24275px, 2.45649024px 218.842432px, 3.24266957px 219.330346px, 4.10355328px 219.694144px, 5.02678791px 219.921478px, 6.00002px 220px, 258.843px 220px, 267.67px 230.886px, 267.67px 230.886px, 268.05968px 231.28587px, 268.50024px 231.59688px, 268.97896px 231.81903px, 269.48312px 231.95232px, 270px 231.99675px, 270.51688px 231.95232px, 271.02104px 231.81903px, 271.49976px 231.59688px, 271.94032px 231.28587px, 272.33px 230.886px, 281.157px 220px, 534px 220px, 534px 220px, 534.973302px 219.921478px, 535.896576px 219.694144px, 536.757474px 219.330346px, 537.543648px 218.842432px, 538.24275px 218.24275px, 538.842432px 217.543648px, 539.330346px 216.757474px, 539.694144px 215.896576px, 539.921478px 214.973302px, 540px 214px, 540px 6px, 540px 6px, 539.921478px 5.02676847px, 539.694144px 4.10353536px, 539.330346px 3.24265389px, 538.842432px 2.45647728px, 538.24275px 1.75735875px, 537.543648px 1.15765152px, 536.757474px 0.66970881px, 535.896576px 0.30588384px, 534.973302px 0.07852983px, 534px 9.9333241925913E-32px, 6px 0px)',
          }}
        >
          <h4 className="mb-2 font-inter text-lg font-medium">{title}</h4>
          <p className="font-gilroy-400 text-sm">{text}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <img src={photo} alt={photo} />
        <div>
          <h4 className="font-gilroy-700 text-lg">
            {firstName} {lastName}
          </h4>
          <p className="text-sm font-normal">{company}</p>
        </div>
      </div>
    </>
  );
};
