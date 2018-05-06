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
    holdPeople: People = null;

    isFilteringByDepartment: boolean = false;
    showingDepartment: string = "SALES";

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

    showDepartmentFilters() {
        this.isFilteringByDepartment = !this.isFilteringByDepartment;

        // If this is the firs time filtering hold the original array
        if (this.holdPeople == null) { this.holdPeople = this.people; }

        this.people = null;

        // this.holdPeople.employees.filter(
        //     (emp: Employee) => {
        //         console.log("happening");
        //         console.log(emp);
        //         emp.department != 'SALES';
        //     }
        // )
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
