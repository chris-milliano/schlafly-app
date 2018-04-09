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

    isFilteringByDepartment: string = null;

    isEmployeeSelected: boolean = false;
    selectedEmployee: Employee = null;

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

    getImageURLOf (url: string): string {
        return `url(${url})`;
    }

    showEmployeeDetails(employeeName: string) {
        this.isEmployeeSelected = !this.isEmployeeSelected;
        let selectedEmployee: Employee;
        for (let emp of this.people.employees) {
            if (emp.name == employeeName) {
                this.selectedEmployee = emp;
            }
        }
    }

    hideEmployeeDetails() {
        this.isEmployeeSelected = !this.isEmployeeSelected;
        this.selectedEmployee = null;
    }
}
