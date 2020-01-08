import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CatService } from './cat-service.service';
import { CatComponentComponent } from './cat-component/cat-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
