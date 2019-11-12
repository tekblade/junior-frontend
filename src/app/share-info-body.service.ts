import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoBodyService {
  subject = new BehaviorSubject<any>(null);
  constructor() { }
  sendMessage(message: any[]) {
    this.subject.next({ bodies: message });
  }
  clearMessages() {
    this.subject.next(null);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
