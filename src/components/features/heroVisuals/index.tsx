import RealTimeHero from './RealTimeHero';
import ExpiryHero from './ExpiryHero';
import ClientUserHero from './ClientUserHero';
import MakeReadyHero from './MakeReadyHero';
import RBACHero from './RBACHero';
import AuditHero from './AuditHero';
import ReportingHero from './ReportingHero';

export const featureHeroMap: Record<string, React.FC> = {
  realTimeHero: RealTimeHero,
  expiryHero: ExpiryHero,
	makeReadyHero:MakeReadyHero,
	rbacHero:RBACHero,
	auditHero:AuditHero,
	reportingHero:ReportingHero,
	clientUserHero:ClientUserHero,
};