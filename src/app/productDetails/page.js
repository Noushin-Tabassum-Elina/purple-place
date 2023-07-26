import Link from 'next/link';
import React from 'react';
import { SideBySideMagnifier } from 'react-image-magnifiers';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductDetails = ({ product }) => {
  const [largeImage, setLargeImage] = React.useState(product.images[0].largeImage);

  const handleChangeSlider = (event) => {
    setLargeImage(event);
  };

  const ArrowLeft = (props) => (
    <a href="#disabled" {...props} className="grist-prev">
      <i className="fas fa-chevron-left"></i>
    </a>
  );

  const ArrowRight = (props) => (
    <a href="#disabled" {...props} className="grist-next">
      <i className="fas fa-chevron-right"></i>
    </a>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <>
      <SideBySideMagnifier
        className="grist-input-position"
        imageSrc={largeImage}
        largeImageSrc={largeImage}
        alwaysInPlace={false}
        overlayOpacity={0.6}
        switchSides={false}
        zoomPosition="left"
        inPlaceMinBreakpoint={641}
        fillAvailableSpace={false}
        fillAlignTop={false}
        fillGapTop={10}
        fillGapRight={10}
        fillGapBottom={10}
        fillGapLeft={0}
        zoomContainerBorder="1px solid #ccc"
        cursorStyle="zoom-in"
      />
      <div>
        <div className="card w-full bg-base-100 shadow-xl shadow-purple-400">
          <figure>
            <Carousel {...settings}>
              {product.images.map((img, index) => (
                <div className="border-2 border-black" key={index}>
                  <img
                    className="w-full max-h-[600px] bg-cover border-2 border-black"
                    src={img}
                    onClick={() => handleChangeSlider(img.largeImage)}
                  />
                </div>
              ))}
            </Carousel>
          </figure>
          <div className="card-body">
            <h2 className="text-2xl md:text-4xl p-2 font-bold text-center my-4 text-purple-400 italic">
              {product.name}
            </h2>
            <p>{product.description}</p>
            <p className="font-bold text-xl">{product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
