import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { A0Component } from './a0/a0.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { A4Component } from './a4/a4.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ResourcesComponent } from './resources/resources.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AssignmentsComponent,
    A0Component,
    A1Component,
    A2Component,
    A3Component,
    A4Component,
    SyllabusComponent,
    ResourcesComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
