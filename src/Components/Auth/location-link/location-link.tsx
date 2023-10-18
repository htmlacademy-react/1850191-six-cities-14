interface LocationLinkProps {
  city: string;
}


const LocationLink = ({ city }: LocationLinkProps) => (
  <section className="locations locations--login locations--current">
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{city}</span>
      </a>
    </div>
  </section>
);

export default LocationLink;
