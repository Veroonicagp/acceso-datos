
import { Observable } from "rxjs";
import { Model } from "./model";
// obligar a extender<T>
//metodos para crud
export interface DataService<T extends Model>{
    
    //necesita que le pasemos un tipo persona, model contiene id,detras de los : ponemos lo que queremos que devuelva 
    //ceate(calue:T):T;
    //con observable promete que lo devuelve
    create(value:T):Observable<T>;

    request():Observable<T>;
    requestById(id:string):Observable<T|null>;

    update(id:string, value:T):Observable<T|null>

    delete(id:string):Observable<T|null>
}