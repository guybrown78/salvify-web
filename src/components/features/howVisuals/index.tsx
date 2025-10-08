import ExpiryTimeline from './ExpiryTimeline';
import RealTimeMovement from './RealTimeMovement';

export const featureHowMap: Record<string, React.FC> = {
  expiryTimeline: ExpiryTimeline,
  realTimeMovement: RealTimeMovement,
};