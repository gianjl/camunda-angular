import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessDefinition } from './schemas/ProcessDefinition';
import { Task } from './schemas/Task';
import { ProcessInstance } from './schemas/ProcessInstance';
import { Activity } from './schemas/Activity';
import { User } from './authentication/models/user.model';
import { Auth } from './authentication/models/auth.model';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CamundaRestService {
  private engineRestUrl = '/engine-rest/';

  constructor(private http: HttpClient) {

  }
  /*---------- Tasks Services ---------------*/
  getTasks(): Observable<Task[]> {
    const endpoint = `${this.engineRestUrl}task?sortBy=created&sortOrder=desc&maxResults=10`;
    return this.http.get<any>(endpoint).pipe(
      tap(form => this.log(`fetched tasks`)),
      catchError(this.handleError('getTasks', []))
    );
  }

  getTaskFormKey(taskId: String): Observable<any> {
    const endpoint = `${this.engineRestUrl}task/${taskId}/form`;
    return this.http.get<any>(endpoint).pipe(
      tap(form => this.log(`fetched taskform`)),
      catchError(this.handleError('getTaskFormKey', []))
    );
  }

  getVariablesForTask(taskId: String, variableNames: String): Observable<any> {
    const endpoint = `${this.engineRestUrl}task/${taskId}/form-variables?variableNames=${variableNames}`;
    return this.http.get<any>(endpoint).pipe(
      tap(form => this.log(`fetched variables`)),
      catchError(this.handleError('getVariablesForTask', []))
    );
  }

  postCompleteTask(taskId: String, variables: Object): Observable<any> {
    const endpoint = `${this.engineRestUrl}task/${taskId}/complete`;
    return this.http.post<any>(endpoint, variables).pipe(
      tap(tasks => this.log(`posted complete task`)),
      catchError(this.handleError('postCompleteTask', []))
    );
  }

  getTask(taskId): Observable<Task> {
    const endpoint = `${this.engineRestUrl}task/${taskId}`;
    return this.http.get<any>(endpoint).pipe(
      tap(taskItem => this.log(`fetched task`)),
      catchError(this.handleError('getTask', []))
    );
  }

  getProcessDefinitionTaskKey(processDefinitionKey): Observable<any> {
    const url = `${this.engineRestUrl}process-definition/key/${processDefinitionKey}/startForm`;
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`fetched formkey`)),
      catchError(this.handleError('getProcessDefinitionFormKey', []))
    );
  }

  deleteTask(taskId): Observable<any> {
    const endpoint = `${this.engineRestUrl}task/${taskId}`;
    return this.http.delete(endpoint, httpOptions).pipe(
      tap(task => this.log(`task deleted`)),
      catchError(this.handleError('deleteTask', []))
    );
  }

  /*---------- Processes Services ---------------*/

  getProcessDefinitions(): Observable<ProcessDefinition[]> {
    return this.http.get<ProcessDefinition[]>(this.engineRestUrl + 'process-definition?latestVersion=true').pipe(
      tap(processDefinitions => this.log(`fetched processDefinitions`)),
      catchError(this.handleError('getProcessDefinitions', []))
    );
  }

  postProcessInstance(processDefinitionKey, variables): Observable<any> {
    const endpoint = `${this.engineRestUrl}process-definition/key/${processDefinitionKey}/start`;
    return this.http.post<any>(endpoint, variables).pipe(
      tap(processDefinitions => this.log(`posted process instance`)),
      catchError(this.handleError('postProcessInstance', []))
    );
  }

  deployProcess(fileToUpload: File): Observable<any> {
    const endpoint = `${this.engineRestUrl}deployment/create`;
    const formData = new FormData();

    formData.append('fileKey', fileToUpload, fileToUpload.name);

    return this.http.post(endpoint, formData);
  }

  deleteProcessInstance(piid: string): Observable<any> {
    const endpoint = `${this.engineRestUrl}process-instance/${piid}`;
    return this.http.delete(endpoint, httpOptions).pipe(
      tap(pIItem => this.log(`process instance deleted`)),
      catchError(this.handleError('deleteProcessInstance', []))
    );
  }

  getProcessInstances(): Observable<ProcessInstance[]> {
    return this.http.get<ProcessInstance[]>(this.engineRestUrl + 'process-instance').pipe(
      tap(processInstances => this.log(`fetched processInstances`)),
      catchError(this.handleError('getProcessInstances', []))
    );
  }

  getActivityInstances(piid): Observable<Activity> {
    return this.http.get<any>(this.engineRestUrl + 'process-instance/'+ piid + '/activity-instances').pipe(
      tap(activity => this.log(`fetched activity`)),
      catchError(this.handleError('getActivityInstances', []))
    );
  }

  getProcessDiagram(processDefinitionId): Observable<any> {
    return this.http.get<any>(this.engineRestUrl + 'process-definition/'+ processDefinitionId + '/diagram').pipe(
      tap(activity => this.log(`fetched diagram`)),
      catchError(this.handleError('getProcessDiagram', []))
    );
  }

  /*---------- Users Services ---------------*/

  verifyUser(requestBody): Observable<Auth> {
    const endpoint = `${this.engineRestUrl}identity/verify`;
    return this.http.post<any>(endpoint, requestBody, httpOptions).pipe(
      tap(user => this.log(`User authenticated`)),
      catchError(this.handleError('verifyUser', []))
    );
  }

  createUser(requestBody): Observable<any> {
    const endpoint = `${this.engineRestUrl}user/create`;
    return this.http.post(endpoint, requestBody, httpOptions).pipe(
      tap(user => this.log(`User created`)),
      catchError(this.handleError('createUser', []))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<any>(this.engineRestUrl + 'user', httpOptions).pipe(
      tap(user => this.log(`fetched users`)),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUserProfile(userId): Observable<User> {
    return this.http.get<any>(this.engineRestUrl + 'user/' +userId+'/profile', httpOptions).pipe(
      tap(user => this.log(`fetched user`)),
      catchError(this.handleError('getUserProfile', []))
    );
  }

  deleteUser(userId): Observable<any> {
    return this.http.delete(this.engineRestUrl + 'user/'+userId, httpOptions).pipe(
      tap(user => this.log(`User deleted`)),
      catchError(this.handleError('deleteUser', []))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
