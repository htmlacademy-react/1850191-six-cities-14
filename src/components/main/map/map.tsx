import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../../hooks/use-map';
import { City } from '../../../types/city';
import { MAP_HEIGHT, MapMarkerSVG } from '../../../const/routes';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../../types/offer-preview';


type MapProps = {
  city: City;
  offers: OfferType[];
  hoveredOfferId: OfferType['id'] | null;
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
  const { city, offers, hoveredOfferId } = props;

  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
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

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, hoveredOfferId]);

  return <section className="cities__map map" style={{ height: MAP_HEIGHT }} ref={mapRef}></section>;
};

export default Map;
