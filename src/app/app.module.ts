import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/homepage/home-page.component';
import { NavbarComponent } from './core/homepage/nav/nav-bar.component';
import { DataStoreService } from './services/data-store-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomValidationService } from './services/custom-validation-service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ DataStoreService, CustomValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
