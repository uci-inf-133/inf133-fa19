import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ResourcesComponent } from './resources/resources.component';
import { CalendarComponent } from './calendar/calendar.component';
import { A0Component } from './a0/a0.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { A4Component } from './a4/a4.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent},
	{ path: 'assignments', component: AssignmentsComponent},
	{ path: 'syllabus', component: SyllabusComponent},
	{ path: 'resources', component: ResourcesComponent},
	{ path: 'calendar', component: CalendarComponent},
	{ path: 'assignments/a0', component: A0Component},
	{ path: 'assignments/a1', component: A1Component},
	{ path: 'assignments/a2', component: A2Component},
	{ path: 'assignments/a3', component: A3Component},
	{ path: 'assignments/a4', component: A4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
