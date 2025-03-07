import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    ...appConfig, // Spread existing appConfig
    providers: [
      ...appConfig.providers, // Keep existing providers
      provideHttpClient() 
    ]
  })
  .catch(err => console.error(err));