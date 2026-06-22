import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

// Lägg till provideHttpClient() till appConfig
bootstrapApplication(AppComponent, {
  ...appConfig,  
  providers: [
    ...appConfig.providers || [], 
    provideHttpClient(), 
  ]
}).catch((err) => console.error(err));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then((registration) => {
      console.log('Service Worker registered successfully with scope:', registration.scope);
    }).catch((error) => {
      console.error('Service Worker registration failed. Error:', error);
    });
  });
}