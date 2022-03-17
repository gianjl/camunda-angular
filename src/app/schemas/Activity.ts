export class Activity {
  constructor(
  public id: string,
  public activityId: string,
  public activityName: string,
  public activityType: string,
  public childActivityInstances: Activity[]
  ) {  }
}