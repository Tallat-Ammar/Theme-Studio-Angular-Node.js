import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {MovielistComponent} from './movielist/movielist.component';
import {BookticketComponent} from './bookticket/bookticket.component';
import {FooterComponent} from './footer/footer.component';
import {AdminComponent} from './admin/admin.component';
import{LoginComponent}from'./login/login.component';
import{EditComponent}from'./edit/edit.component';
import{SubscribeComponent}from './subscribe/subscribe.component'
import { from } from 'rxjs';



const routes: Routes = [
  { path: 'header', component: HeaderComponent},
 { path: '', component: HomeComponent},
 { path: 'movielist', component: MovielistComponent},
 { path: 'bookticket', component: BookticketComponent},
 { path: 'signup', component: SignupComponent},
 { path: 'footer', component: FooterComponent},
 { path: 'admin', component: AdminComponent},
 {path:'Login',component:LoginComponent},
{path:'edit/:id',component:EditComponent},
{path:'Sub',component:SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
