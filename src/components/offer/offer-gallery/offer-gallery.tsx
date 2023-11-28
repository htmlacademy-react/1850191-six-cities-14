type OfferGalleryProps = {
  images: string[]; // Тип данных для изображений (замените на соответствующий тип)
};

export const OfferGallery = ({ images }: OfferGalleryProps): JSX.Element => (
  <section className="offer">
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
