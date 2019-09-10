import { StoreModule } from '@ngrx/store';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { UiLoginModule } from './../../../../libs/ui-login/src/lib/ui-login.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { MaterialModule } from './../../../../libs/material/src/lib/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    UiLoginModule,
    HttpClientModule,
    HomeModule,
    ProjectsModule,
    CustomersModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
