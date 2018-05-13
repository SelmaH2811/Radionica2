import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { AuthenticationModule } from './modules/authentication.module';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthenticationModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
