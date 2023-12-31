import { memo } from 'react';

type OfferHostProps = {
  host: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  description: string;
};

export const OfferHost = memo(({ host, description }: OfferHostProps): JSX.Element => (
  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <div className="offer__host-user user">
      <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
        <img className="offer__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt={host.avatarUrl} />
      </div>
      <span className="offer__user-name">{host.name}</span>
      {host.isPro && <span className="offer__user-status">Pro</span>}
    </div>
    <div className="offer__description">
      <p className="offer__text">{description}</p>
    </div>
  </div>
));

OfferHost.displayName = 'OfferHost';
