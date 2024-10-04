
import { BehaviorSubject, Observable } from "rxjs";
import { Model } from "./model";
import { Injectable } from "@angular/core";
//une la clsae generica con la especifica
// obligar a extender<T>
//metodos para crud
//cambiar esto a clase abstracta y @Injectable

/**export interface DataService<T extends Model>{
    
    //necesita que le pasemos un tipo persona, model contiene id,detras de los : ponemos lo que queremos que devuelva 
    //ceate(calue:T):T;
    //con observable promete que lo devuelve
    create(value:T):Observable<T>;

    request():Observable<T>;
    requestById(id:string):Observable<T|null>;

    update(id:string, value:T):Observable<T|null>

    delete(id:string):Observable<T|null>
}**/
@Injectable({
    providedIn: 'root'
})
//FALTAN MAS CAMBIOS
export abstract class DataService<T extends Model>{
    protected _records:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
    public records$:Observable<T[]> = this._records.asObservable();
    public abstract create(value:T):Observable<T>;
    public abstract requestAll():Observable<T[]>;
    public abstract requestById(id:string):Observable<T|null>;
    public abstract update(id:string, value:T):Observable<T|null>
    public abstract delete(id:string):Observable<T|null>

}