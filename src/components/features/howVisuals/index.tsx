import AuditTrailTimeline from './AuditTrailTimeline';
import ClientUserDirectory from './ClientUserDirectory';
import ExpiryTimeline from './ExpiryTimeline';
import MakeReadyChecklist from './MakeReadyChecklist';
import RealTimeMovement from './RealTimeMovement';
import ReportingDashboard from './ReportingDashboard';
import RoleAccessFlow from './RoleAccessFlow';

export const featureHowMap: Record<string, React.FC> = {
  expiryTimeline: ExpiryTimeline,
  realTimeMovement: RealTimeMovement,
	makeReadyChecklist: MakeReadyChecklist,
	roleAccessFlow: RoleAccessFlow,
	auditTrailTimeline: AuditTrailTimeline,
	reportingDashboard: ReportingDashboard,
	clientUserDirectory: ClientUserDirectory,
};