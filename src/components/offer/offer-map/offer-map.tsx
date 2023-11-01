import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../../hooks/use-map';
import { offers } from '../../../mocks/offers';
import 'leaflet/dist/leaflet.css';
import { MapMarkerSVG } from '../../../const/routes';

const defaultCustomIcon = new Icon({
  iconUrl: MapMarkerSVG.DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const OfferMap = (): JSX.Element => {
  const mapRef = useRef(null);
  const city = {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  };

  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const amsterdamOffers = offers.filter((offer) => offer.city.name === 'Amsterdam');

      amsterdamOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map]);

  return <section className="offer__map map" ref={mapRef}></section>;
};

export default OfferMap;
