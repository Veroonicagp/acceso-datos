import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { DataService } from '../interfaces/data-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//antes de esto falta una capa para consultar los datos (InMemory)
export class PeopleService {

  constructor(
    private dataSvc:DataService<Person>) { }

    addPerson(person:Person):Observable<Person>{
      return this.dataSvc.create(person)
    }

    updatePerson(id:string,person:Person):Observable<Person|null>{
      return this.dataSvc.update(id,person)
    }

    deletePerson(id:string):Observable<Person|null>{
      return this.dataSvc.delete(id)
    }

    getAll():Observable<Person|null>{
      return this.dataSvc.request()
    }

    getPerson(id:string):Observable<Person|null>{
      return this.dataSvc.requestById(id)
    }



}
