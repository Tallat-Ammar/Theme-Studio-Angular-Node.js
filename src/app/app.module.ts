import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule}from '@angular/http';
import{FormsModule}from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{CommonService}from'./common.service';
import { MemberService } from './member.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovielistComponent,
    BookticketComponent,
    SignupComponent,
    AdminComponent,
    LoginComponent,
    EditComponent,
    SubscribeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService,MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
