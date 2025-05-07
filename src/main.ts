//import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
/* import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { environment } from './environments/environment'; */

/* if (environment.production) {
  enableProdMode();
} */

bootstrapApplication(AppComponent, appConfig)
.catch(err => console.error(err));
