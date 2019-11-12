import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoTitleService {
  subject = new BehaviorSubject<any>(null);
  constructor() { }
  sendMessage(message: any[]) {
    this.subject.next({ titles: message });
  }
  clearMessages() {
    this.subject.next(null);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
