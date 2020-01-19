import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ServiceComponent } from './Components/service/service.component';
import { AboutComponent } from './Components/about/about.component';
import { TeamComponent } from './Components/team/team.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DividerComponent } from './Components/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
