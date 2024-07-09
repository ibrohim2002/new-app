import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./styles.css";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function MainImagesSwiper({ images }) {
  console.log(images.data);
  if (images.data.length > 1) {
    return (
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {images.data.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="top_image"
                src={el?.attributes.url}
                alt="top_image"
                width={611}
                height={461}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  } else {
    return (
      <img
        className="top_image"
        src={
          images.data.length !== 0
            ? images.data[0]?.attributes.url
            : "/images/placeholder.png"
        }
        alt="top_image"
        width={611}
        height={461}
      />
    );
  }
}
