import { Observable } from 'rxjs/Observable';

export interface IFormCanDeactivate {
    podeDesativar(nextState: string): Observable<boolean> | Promise<boolean> | boolean;
}
