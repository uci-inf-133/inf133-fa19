import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
	assignments:any[] = [];

  constructor(private http:HttpClient) {
  	this.http.get('./assets/calendar.json').subscribe(calendar => {
  		this.parseCalendar(calendar as {});
  	});
  }

  ngOnInit() {
  }

  parseCalendar(calendar:{}) {
    let events:any[] = calendar['events'];
    //Add date string to each event
    events.map(e => {
      let hhmm = calendar['defaults']['assignment']['due'].split(":");
      let dueDate = moment(e['date']);
      dueDate.hours(hhmm[0]);
      dueDate.minutes(hhmm[1])
      e['due'] = dueDate.format('dddd, MMMM Do, h:mma');
      return e;
    });
    //Filter by type
    this.assignments = events.filter(e => e['type'] == 'assignment');
  }
}
