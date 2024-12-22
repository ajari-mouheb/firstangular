import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { DoneComponent } from './tasks/done/done.component';
import { CurrentComponent } from './tasks/current/current.component';
import { PendingComponent } from './tasks/pending/pending.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ServiceComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    ClientComponent,
    FooterComponent,
    ContactComponent,
    TasksComponent,
    DoneComponent,
    CurrentComponent,
    PendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
