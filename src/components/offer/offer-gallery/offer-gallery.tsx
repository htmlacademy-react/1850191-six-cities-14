import { memo } from 'react';

type OfferGalleryProps = {
  images: string[];
};

export const OfferGallery = memo(({ images }: OfferGalleryProps): JSX.Element => {
  const maxImagesToShow = 6;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.slice(0, maxImagesToShow).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

OfferGallery.displayName = 'OfferGallery';
