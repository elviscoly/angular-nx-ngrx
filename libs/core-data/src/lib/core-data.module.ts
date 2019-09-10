import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { HttpClientModule} from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule],
  providers: [
    ProjectsService
  ],
  declarations: [CountryComponent],
  exports: [CountryComponent]
})
export class CoreDataModule {}
