import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as bibtex from 'bibtex-parse-js';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ParsePublicationsService {
	private allPublications:any[] = [];
	public static readonly ARCHIVAL:string[] = ['paper', 'note', 'journal'];
	public static readonly MAPPING:{} = {'paper':['paper', 'note'], 'journal':['journal'], 'workshop':['organizer', 'wip', 'workshop', 'poster'], 'book':'dissertation'};

  constructor(private http:HttpClient) {
  }

  getPublications():Observable<any[]> {
  	return new Observable((observer) => {
  		this.http.get('./assets/publications.json').subscribe(pubs => {
	  		let pubList = pubs as {};
	  		Object.keys(pubList).forEach(pub => {
	  			let pubURL = './assets/bibtex/' + pub + '.bib';
	  			this.http.get(pubURL, {responseType: 'text'}).subscribe(bib => {
	  				this.addBib(bibtex.toJSON(bib), pub, pubURL, pubList[pub]);
	  				observer.next(this.allPublications);
	  			});
	  		});
	  	});
  		return {unsubscribe() {}};
  	})
  }

  addBib(bib, key, url, labels) {
  	bib = Object.assign({}, bib[0].entryTags, labels);
	bib['key'] = key;
	bib['bib'] = url;
	bib.author = bib.author.split(" and ").map(function(n) {return n.split(",").reverse().join(' ').replace(/ /g, "\xa0").trim()}); //reverse hack will work in all trivial cases, e.g. Epstein, Daniel A.
	if('booktitle' in bib) { //Most of my publications have a book title field (e.g., conference publications).
		bib.booktitle = bib.booktitle.replace(/\\/g, "").replace(/#38;/g, "");
	}
	if('journal' in bib) { //A few have journals instead.
		bib.journal = bib.journal.replace(/\\/g, "").replace(/#38;/g, "");
	}
	if('series' in bib) {
		bib.series = bib.series.replace(/'/g, 20); // '15 -> 2015
	}
	this.allPublications.push(bib);
	this.allPublications.sort(this.compareBib);
}

compareBib(a, b) {
	var ma = moment(a.date, "MMM YYYY");
	var mb = moment(b.date, "MMM YYYY");
	if(ma != mb) {
		return ma > mb ? -1 : 1;
	}
	var typeSortOrder = ['paper', 'note', 'journal', 'organizer', 'wip', 'workshop', 'poster', 'dissertation'];
	var ta = typeSortOrder.indexOf(a.type);
	var tb = typeSortOrder.indexOf(b.type)
	if(ta != tb) {
		return ta > tb ? 1 : -1;
	}
	//There are non-breaking spaces in these strings. Be careful of that when copy-pasting.
	var oa = a.author.indexOf('Daniel A. Epstein');
	var ob = b.author.indexOf('Daniel A. Epstein');
	if(oa != ob) {
		return oa > ob ? 1 : -1;
	}
	var al = a.author.length;
	var bl = b.author.length;
	if(al != bl) {
		return al > bl ? 1 : -1;
	}
	return 0; //TODO: more detailed sorting when pubs were published at the same time at the same "priority" level
}
}
