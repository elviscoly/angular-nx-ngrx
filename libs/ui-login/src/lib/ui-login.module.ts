import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from 'libs/material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

export const uiLoginRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule {}
