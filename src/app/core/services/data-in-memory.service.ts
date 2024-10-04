import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { DataService } from '../interfaces/data-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInMemory implements DataService<Person> {

  constructor() { }
  create(value: Person): Observable<Person> {
    throw new Error('Method not implemented.');
  }
  request(): Observable<Person> {
    throw new Error('Method not implemented.');
  }
  requestById(id: string): Observable<Person | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, value: Person): Observable<Person | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<Person | null> {
    throw new Error('Method not implemented.');
  }
  ceate: any;
}