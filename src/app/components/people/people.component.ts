import { Component, OnInit } from '@angular/core';

import { People } from '../../models/people';
import { Employee } from  '../../models/employee';
import { PeopleService } from '../../services/people.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
    providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

    people: People;

    constructor (
        private peopleService: PeopleService
    ) {}

    ngOnInit() {
        console.log("Init people.component");
        this.getPeople();
    }

    getPeople() {
        this.peopleService.getPeople().subscribe (
            res => { this.people = res; }
        );
    }
}
