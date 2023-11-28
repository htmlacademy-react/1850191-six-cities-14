type LocationLinkProps = {
  city: string;
}

export const LocationLink = ({ city }: LocationLinkProps): JSX.Element => (
  <section className="locations locations--login locations--current">
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{city}</span>
      </a>
    </div>
  </section>
);


