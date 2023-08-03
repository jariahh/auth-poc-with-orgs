import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BaseComponent } from './components/base/base.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthenticationModule } from '@auth-poc-with-orgs/authentication';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, BaseComponent, LogoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AuthModule.forRoot({
      domain: 'qa-alchemy.us.auth0.com',
      clientId: 'hrpVpK5PiHBE69bnAaLr55levrD2RQng',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://qa-portal.alchemycommerce.io',
      },
    }),
    AuthenticationModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
