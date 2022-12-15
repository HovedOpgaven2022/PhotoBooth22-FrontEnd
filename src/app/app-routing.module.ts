import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from "./faq/faq.component";
import {CarouselComponent} from "./carousel/carousel.component";
const routes: Routes = [
  {path:'', component:CarouselComponent},
  {path:'faq', component:FaqComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
