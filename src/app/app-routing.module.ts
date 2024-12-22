import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path :'contact',component:ContactComponent},
  {path :'services',component:ServiceComponent},
  {path:'',component:PortfolioComponent},
  {path:'tasks' , component : TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
