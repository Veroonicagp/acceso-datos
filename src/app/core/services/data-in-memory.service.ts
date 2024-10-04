import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { DataService } from '../interfaces/data-service';
import { Observable } from 'rxjs';
import { Model } from '../interfaces/model';

//no injectable
//no es especifco para persona esta hecho para cualquier tipo de dato por ello el uso de data o records
// Mirar lo generico de las paginas y en esta <T>
//implementar un (_: son privadas) behaviar subject , observable($)
//
export abstract class generic<T>{
  public abstract method1<T>():void;
}
export class DataInMemory<T extends Model> extends DataService<T> {
 
  constructor(){
    super();
    console.log("DataInMemoryService created")
  }
  public override create(value: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  public override requestAll(): Observable<T[]> {
    throw new Error('Method not implemented.');
  }
  public override requestById(id: string): Observable<T | null> {
    throw new Error('Method not implemented.');
  }
  public override update(id: string, value: T): Observable<T | null> {
    throw new Error('Method not implemented.');
  }
  public override delete(id: string): Observable<T | null> {
    throw new Error('Method not implemented.');
  }




}