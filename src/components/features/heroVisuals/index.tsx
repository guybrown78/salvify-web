import RealTimeHero from './RealTimeHero';
import ExpiryHero from './ExpiryHero';

export const featureHeroMap: Record<string, React.FC> = {
  realTimeHero: RealTimeHero,
  expiryHero: ExpiryHero,
};