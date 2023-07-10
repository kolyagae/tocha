import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { useState } from 'react';
import Slider, { Settings } from 'react-slick';

import { reviews } from '@/data/data.json';

import { ReviewSlide } from './ReviewsSlide';

const SLIDES_TO_SCROLL = 2;
const SLIDES_TO_SHOW = 2;

export const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: SLIDES_TO_SCROLL,
    dotsClass: 'mt-8 !flex justify-center gap-0.5',
    customPaging: (i) => (
      <div className="flex h-[15px] w-[15px] items-center justify-center hover:cursor-pointer">
        <div
          className={
            i === currentSlide / SLIDES_TO_SCROLL
              ? 'h-[10px] w-[10px] rounded-full border-[1px] border-violet bg-violet'
              : 'h-[10px] w-[10px] rounded-full border-2 border-violet opacity-50'
          }
        ></div>
      </div>
    ),
    beforeChange(_, nextSlide) {
      setCurrentSlide(nextSlide);
    },
  };

  return (
    <Slider {...settings}>
      {reviews.map((el) => (
        <ReviewSlide key={el.client.firstName + el.client.lastName} {...el} />
      ))}
    </Slider>
  );
};
