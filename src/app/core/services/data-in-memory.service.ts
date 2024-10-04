import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { DataService } from '../interfaces/data-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//no es especifco para persona esta hecho para cualquier tipo de dato por ello el uso de data o records
// Mirar lo generico de las paginas y en esta <T>
//implementar un (_: son privadas) behaviar subject , observable($)
//
export class DataInMemory<T> implements DataService {

  constructor(
    //super y sonsole.log
  ) { }
  create(value: Person): Observable<T> {
    // [... mas datso introducidos realiza una copia (.)];
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