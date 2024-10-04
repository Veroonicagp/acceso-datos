import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './core/interfaces/data-service';
//falta implementar una funcion que es la que implementamos diferentes tipos de backensd
export function DataServiceFactory(backend:string){

}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //HACEMOS USO DE LA FUNCION Y LE INTRODUCIMOS VALUE
    {
      provide:'backend',
      //CAMBIANDO ESTE SE CAMBIA DE SERVICIO DE FIREBASE A INMEMORY..
      useValue:'InMemory'
    },
    {
      provide: DataService,
      deps:['backend'],
      useFactory: DataService

    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
