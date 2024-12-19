import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShellComponent } from '@daisyui/docs';

bootstrapApplication(ShellComponent, appConfig).catch((err) =>
  console.error(err)
);
