import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherInformationComponent } from './weather-information/weather-information.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather/:x', component: WeatherInformationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
