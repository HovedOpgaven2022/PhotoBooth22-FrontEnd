import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from "./faq/faq.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NotfoundComponent} from "./notfound/notfound.component";
const routes: Routes = [
  {path:'', component:CarouselComponent},
  {path:'home', component:CarouselComponent},
  {path:'about', component:AboutComponent},
  {path:'faq', component:FaqComponent},
  {path:'contact', component:ContactComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
