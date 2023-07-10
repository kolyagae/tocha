import { ReviewSlider } from './ReviewsSlider';

const Reviews = () => (
  <section className="bg-lightBlueBg">
    <div className="container mx-auto pb-20">
      <div className="relative mb-12 flex items-center justify-center">
        <h2>Отзывы клиентов</h2>
        <div className="absolute top-0 right-0">
          <img
            src="/images/reviews/Quote_Mark.png"
            role="presentation"
            alt=""
          />
        </div>
      </div>
      <ReviewSlider />
    </div>
  </section>
);

export default Reviews;
