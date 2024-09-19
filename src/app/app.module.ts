import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


// Import the AppComponent as a standalone component
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  // Setting up the routing
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrapping the standalone AppComponent
})
export class AppModule { }

