import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  assignments_and_quizzes:any[] = [];
  lectures:any[] = [];

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
      e['dateStr'] = moment(e['date']).format('ddd MMM D');
      return e;
    });
    //Filter by type
    this.assignments_and_quizzes = events.filter(e => e['type'] == 'assignment' || e['type'] == 'quiz');
    this.lectures = events.filter(e => e['type'] == 'lecture');
    //Filter by past/future
    this.assignments_and_quizzes = this.assignments_and_quizzes.filter(e => moment().isSameOrBefore(moment(e['date']), 'days'));
    this.lectures = this.lectures.filter(e => moment().isSameOrAfter(moment(e['date']), 'days'));
    this.lectures = this.lectures.reverse().slice(0, 5);
  }
}
