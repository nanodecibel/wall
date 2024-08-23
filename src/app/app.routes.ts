import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';


export const routes: Routes = [
{ path: 'home', component: HomeComponent },

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', component: HomeComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
