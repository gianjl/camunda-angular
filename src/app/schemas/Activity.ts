export class Activity {
  id: string;
  activityId: string;
  activityName: string;
  activityType: string;
  childActivityInstances: Activity[] = [];
}