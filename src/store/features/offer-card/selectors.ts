import { RootState } from '../../configure-store';

export const selectHoveredOfferId = (state: RootState) => state.hoverOfferId.hoveredOfferId;
