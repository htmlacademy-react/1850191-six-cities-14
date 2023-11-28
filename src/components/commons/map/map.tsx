import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../../hooks/use-map';
import { City } from '../../../types/city';
import { MapMarkerSVG } from '../../../const/const';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../../types/offer-preview';
import { useAppSelector } from '../../../hooks/store-hooks';
import { selectHoveredOfferId } from '../../../store/features/offer-card/selectors';


type MapProps = {
  city: City;
  offers: OfferType[];
  className: string;
  activeOfferId?: string | null;
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
  const { city, offers, className, activeOfferId } = props;

  const hoveredOfferId = useAppSelector(selectHoveredOfferId);
  const effectiveActiveOfferId = activeOfferId ?? hoveredOfferId;
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup();
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            effectiveActiveOfferId !== null && offer.id === effectiveActiveOfferId
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
  }, [map, offers, effectiveActiveOfferId]);

  return <section className={`${className} map`} ref={mapRef}></section>;
};


