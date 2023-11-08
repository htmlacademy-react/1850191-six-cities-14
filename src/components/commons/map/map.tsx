import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../../hooks/use-map';
import { City } from '../../../types/city';
import { MapMarkerSVG } from '../../../const/routes';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../../types/offer-preview';


type MapProps = {
  city: City;
  offers: OfferType[];
  hoveredOfferId: OfferType['id'] | null;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapMarkerSVG.DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MapMarkerSVG.CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const Map = (props: MapProps): JSX.Element => {
  const { city, offers, hoveredOfferId, className } = props;

  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);

      const markerLayer = layerGroup();
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            hoveredOfferId !== null && offer.id === hoveredOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      markerLayer.addTo(map);

      return () => {
        markerLayer.clearLayers();
      };
    }
  }, [city, offers, hoveredOfferId, map]);

  return <section className={`${className} map`} ref={mapRef}></section>;
};


