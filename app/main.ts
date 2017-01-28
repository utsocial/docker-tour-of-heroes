/*
Compiles the application with the JIT compiler and bootstraps the application to run in the browser. That's a reasonable choice for the development of most projects and it's the only viable choice for a sample running in a live-coding environment like Plunker. You'll learn about alternative compiling and deployment options later in the documentation.
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
