import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './services/users.service';
import { UserChangeComponent } from './home/user-change/user-change.component';
import { RoleNamePipe } from './pipes/roleName.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserChangeComponent,
    RoleNamePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
