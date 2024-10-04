
import { Observable } from "rxjs";
import { Model } from "./model";
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

//FALTAN MAS CAMBIOS
export abstract class DataService{
    public abstract create(value:T):Observable<T>;

    public abstract request():Observable<T>;
    public abstract requestById(id:string):Observable<T|null>;

    public abstract update(id:string, value:T):Observable<T|null>

    public abstract delete(id:string):Observable<T|null>

}