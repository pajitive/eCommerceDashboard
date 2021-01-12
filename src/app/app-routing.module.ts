import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './guard/admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewbannerComponent } from './newbanner/newbanner.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  
  {path: 'dashboard',component: ComponentComponent, canActivate: [AdminGuard], children:[
   // {path: 'dashboard', component: DashboardComponent },
    {path: '', component: HomeComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path: 'newbanner', component: NewbannerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
